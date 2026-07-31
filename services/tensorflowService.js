const tf = require("@tensorflow/tfjs");
const use = require("@tensorflow-models/universal-sentence-encoder");

let model;
let cachedBooks = [];
let cachedEmbeddings;
let modelLoadFailed = false;

async function initModel() {
  if (model) return model;
  if (modelLoadFailed) return null;
  console.log("Loading Universal Sentence Encoder...");
  try {
    model = await use.load();
    console.log("USE model loaded.");
  } catch (err) {
    modelLoadFailed = true;
    model = null;
    console.warn("USE model could not be loaded. Falling back to keyword matching.", err.message);
  }
  return model;
}

async function initBookEmbeddings(books) {
  await initModel();
  console.log("Generating book embeddings...");
  cachedBooks = Array.isArray(books) ? books : [];
  if (!model) {
    cachedEmbeddings = null;
    return;
  }
  const titles = cachedBooks.map((book) => book.title || "");
  cachedEmbeddings = await model.embed(titles);
  console.log("Book embeddings cached.");
}

async function getRecommendations(prompt) {
  if (!cachedBooks.length) return [];

  if (!model || !cachedEmbeddings) {
    return keywordMatchRecommendations(prompt);
  }

  const userEmbedding = await model.embed([prompt]);
  const similarities = await cosineSimilarity(userEmbedding, cachedEmbeddings);

  return cachedBooks
    .map((book, index) => ({
      title: book.title,
      authors: book.authors,
      average_rating: book.average_rating,
      publisher: book.publisher,
      publication_date: book.publication_date,
      bookString: `${book.title} by ${book.authors || "N/A"}`,
      score: similarities[index] ?? 0,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function keywordMatchRecommendations(prompt) {
  const query = String(prompt || "").toLowerCase();
  return cachedBooks
    .map((book) => {
      const haystack = [book.title, book.authors, book.publisher]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const score = overlapScore(query, haystack);
      return {
        title: book.title,
        authors: book.authors,
        average_rating: book.average_rating,
        publisher: book.publisher,
        publication_date: book.publication_date,
        bookString: `${book.title} by ${book.authors || "N/A"}`,
        score,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function overlapScore(query, haystack) {
  const queryTokens = new Set(query.split(/[^a-z0-9]+/i).filter(Boolean));
  const haystackTokens = new Set(haystack.split(/[^a-z0-9]+/i).filter(Boolean));
  let matches = 0;
  for (const token of queryTokens) {
    if (haystackTokens.has(token)) matches += 1;
  }
  return matches;
}

async function cosineSimilarity(a, b) {
  const aNorm = a.norm(2, 1, true);
  const bNorm = b.norm(2, 1, true);
  const dotProduct = b.matMul(a.transpose());
  const similarity = dotProduct.div(bNorm.mul(aNorm));
  return similarity.squeeze().arraySync();
}

module.exports = {
  initModel,
  initBookEmbeddings,
  getRecommendations,
};
