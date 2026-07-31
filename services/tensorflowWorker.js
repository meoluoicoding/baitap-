const { parentPort } = require("worker_threads");
const tensorflowService = require("./tensorflowService");

let modelReady = false;
let booksReady = false;

async function initializeModel() {
  await tensorflowService.initModel();
  modelReady = true;
}

parentPort.on("message", async (msg) => {
  if (msg.type === "loadBooks") {
    try {
      if (!modelReady) await initializeModel();
      await tensorflowService.initBookEmbeddings(msg.books);
      booksReady = true;
      parentPort.postMessage({ type: "ready", ok: true });
    } catch (err) {
      parentPort.postMessage({ type: "ready", ok: false, error: err.message });
    }
    return;
  }

  if (msg.prompt) {
    const { prompt } = msg;
    try {
      if (!modelReady || !booksReady) {
        throw new Error("Worker not ready yet.");
      }

      const recommendations = await tensorflowService.getRecommendations(prompt);
      const count = recommendations.length;
      let response;

      if (count === 0) {
        response = `Sorry, no matching books were found for "${prompt}". Try a different topic!`;
      } else if (count === 1) {
        response = `I found 1 book that matches your interest:`;
      } else {
        response = `Here are ${count} books I recommend based on "${prompt}":`;
      }

      parentPort.postMessage({
        prompt,
        payload: {
          response,
          books: recommendations,
        },
      });
    } catch (err) {
      parentPort.postMessage({ prompt, error: err.message });
    }
  }
});
