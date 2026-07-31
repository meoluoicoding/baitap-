const fs = require("fs");
const path = require("path");
const dns = require("dns");
dns.setServers(["1.1.1.1"]);
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const mongoose = require("mongoose");
const Book = require(path.join(__dirname, "..", "model", "Book"));

const dataDir = path.join(__dirname, "..", "data");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected.");

    const jsonFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));

    for (const file of jsonFiles) {
      const books = JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf-8"));
      for (const book of books) {
        await Book.findOneAndUpdate({ bookID: book.bookID }, book, { upsert: true, new: true });
        console.log(`  [${file}] ${book.title}`);
      }
    }

    const count = await Book.countDocuments();
    console.log(`\nDone. Total books in DB: ${count}`);
  } catch (err) {
    console.error("Seed failed:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
