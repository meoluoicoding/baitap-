const fs = require("fs");
const path = require("path");
const dns = require("dns");
dns.setServers(["1.1.1.1"]);
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const mongoose = require("mongoose");
const Book = require(path.join(__dirname, "..", "model", "Book"));

const dataDir = path.join(__dirname, "..", "data");

async function seed() {
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    console.error("Error: MONGO_URL not set in environment.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB Atlas.");

    const existingCount = await Book.countDocuments();
    if (existingCount > 0) {
      console.log(`Database already has ${existingCount} books. Skipping import.`);
      console.log("To re-import, drop the collection first or use --force flag.");
      if (!process.argv.includes("--force")) {
        await mongoose.disconnect();
        return;
      }
      console.log("--force flag detected. Clearing existing data...");
      await Book.deleteMany({});
    }

    const jsonFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));
    if (jsonFiles.length === 0) {
      console.log("No JSON files found in /data folder.");
      await mongoose.disconnect();
      return;
    }

    let totalImported = 0;

    for (const file of jsonFiles) {
      const books = JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf-8"));
      if (books.length === 0) continue;

      await Book.insertMany(books, { ordered: false }).catch((err) => {
        if (err.code === 11000) {
          console.log(`  [${file}] Some duplicates skipped.`);
        } else {
          throw err;
        }
      });

      totalImported += books.length;
      console.log(`  [${file}] Imported ${books.length} books.`);
    }

    const finalCount = await Book.countDocuments();
    console.log(`\nDone! Imported ${totalImported} books. Total in DB: ${finalCount}.`);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
