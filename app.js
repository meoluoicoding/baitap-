const dns = require("dns");
const path = require("path");
dns.setServers(["1.1.1.1"]);

require("dotenv").config({ path: path.join(__dirname, "atlas-credentials.env") });
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const { Worker } = require("worker_threads");
const User = require("./model/User");
const Book = require("./model/Book");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URL || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Library";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "Admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "12345";
const workerPath = path.join(__dirname, "services", "tensorflowWorker.js");
const tensorflowWorker = new Worker(workerPath);

tensorflowWorker.on("error", (err) => {
  console.error("TensorFlow Worker Error:", err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: "Incorrect username." });
      if (user.password !== password) return done(null, false, { message: "Incorrect password." });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.use(
  "admin-local",
  new LocalStrategy((username, password, done) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return done(null, { username: ADMIN_USERNAME, isAdmin: true, _id: "admin" });
    }
    return done(null, false, { message: "Incorrect admin credentials" });
  })
);

passport.serializeUser((user, done) => {
  if (user.isAdmin) return done(null, { _id: "admin" });
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  if (id && id._id === "admin") {
    return done(null, { username: ADMIN_USERNAME, isAdmin: true });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return done(null, false);
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

function isLoggedIn(req, res, next) {
  return req.isAuthenticated() ? next() : res.redirect("/login");
}

app.get("/", (req, res) => res.render("home"));
app.get("/register", (req, res) => res.render("register"));

app.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password, isAdmin: false });

    req.login(newUser, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.redirect("/booklist");
    });
  } catch (err) {
    res.redirect("/register");
  }
});

app.get("/login", (req, res) => res.render("login"));

app.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user) => {
    if (err || !user) {
      return res.redirect("/?error=Invalid credentials");
    }

    req.logIn(user, async (loginErr) => {
      if (loginErr) {
        return res.redirect("/?error=Login failed");
      }

      try {
        const books = await Book.find({}).limit(15);
        return res.render("booklist", { books });
      } catch (fetchErr) {
        return res.redirect("/");
      }
    });
  })(req, res, next);
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => (err ? next(err) : res.redirect("/")));
});

app.get("/booklist", isLoggedIn, async (req, res) => {
  try {
    const books = await Book.find({}).limit(15);
    res.render("booklist", { books });
  } catch (err) {
    res.redirect("/");
  }
});

app.get("/admin", (req, res) => res.render("admin-login"));

app.post(
  "/admin-login",
  passport.authenticate("admin-local", {
    successRedirect: "/admin-dashboard",
    failureRedirect: "/?error=Invalid admin credentials",
  })
);

app.get("/admin-dashboard", (req, res) => {
  if (req.isAuthenticated() && req.user.isAdmin) return res.render("admin-dashboard");
  return res.redirect("/admin");
});

app.post("/admin-dashboard/add-book", async (req, res) => {
  if (!req.isAuthenticated() || !req.user.isAdmin) return res.redirect("/admin");

  try {
    await Book.create(req.body);
    res.redirect("/admin-dashboard");
  } catch (err) {
    res.redirect("/admin-dashboard");
  }
});

app.get("/tensorflow-chat", (req, res) => res.render("tensorflowChat"));

app.post("/tensorflow-chat", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt required" });

  const WORKER_TIMEOUT = 30000;
  let responded = false;

  const onMessage = (workerResponse) => {
    if (workerResponse.prompt === prompt && !responded) {
      responded = true;
      clearTimeout(timeoutId);
      if (workerResponse.error) {
        res.status(500).json({ error: "Failed to get TensorFlow response" });
      } else {
        res.json(workerResponse.payload);
      }
      tensorflowWorker.removeListener("message", onMessage);
    }
  };

  const timeoutId = setTimeout(() => {
    if (!responded) {
      responded = true;
      tensorflowWorker.removeListener("message", onMessage);
      res.status(504).json({ error: "TensorFlow response timed out" });
    }
  }, WORKER_TIMEOUT);

  tensorflowWorker.on("message", onMessage);
  tensorflowWorker.postMessage({ prompt });
});

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully.");

    const books = await Book.find({}).limit(300).lean();
    tensorflowWorker.postMessage({ type: "loadBooks", books });

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();


