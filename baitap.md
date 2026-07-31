

<!-- Start of picture text -->
We .<br>7<br><!-- End of picture text -->

SESSION 10 





<!-- Start of picture text -->
INTEGRATING Al CAPABILITIES<br><!-- End of picture text -->



<!-- Start of picture text -->
WITH NODE.JS<br><!-- End of picture text -->

deliver adaptive, intelligent services. They analyze data, learn from patterns, and generate dynamic, real-time responses. 

## **10.1.1 Common AI Features Integrated in Modern Backends** 

Many organizations now depend on AI-driven features and services. Some of the common AI features integrated into modern backend systems include: 

**Intelligent Content Generation Enhanced Personalization Advanced Data Processing** 

## • **Intelligent Content Generation** 

Modern backends utilize advanced AI models, such as Large Language Models (LLMs), to automatically generate meaningful text from provided input. For example, Netflix uses AI-powered backend services to generate concise show descriptions and promotional taglines based on content metadata such as genre, cast, and title. 

## • **Enhanced Personalization** 

Machine Learning (ML) techniques allow backends to analyze large volumes of user data and predict individual preferences. An example for this can be a personalized recommendation list that Spotify generates by analyzing user behavior patterns. 

## • **Advanced Data Processing** 

AI models enable backends to interpret and categorize unstructured or complex data. For example, in a job portal system, the backend can automatically analyze uploaded resumes and categorize candidates based on skills, experience level, or job roles (such as software developer, data analyst, or system administrator). 

## **10.2 Node.js as the Orchestration Layer for AI Models** 

Node.js facilitates easy integration of AI features into its backend applications due to its inherent capabilities. These capabilities are as follows: 

|**Non-blocking Event-**<br>**driven architecture**|**Native REST/JSON/Web**<br>**API support**|**Lightweight design**|
|---|---|---|
|Enables concurrent API<br>calls to multiple AI<br>services|Simplifies interaction<br>with cloud AI services|Facilitates scalable AI<br>microservices and<br>serverless deployments|



Node.js also serves as an orchestration layer, facilitating communication between a wide range of AI services and components. 



<!-- Start of picture text -->
ieee<br>————eeeee<br>2<br><!-- End of picture text -->





## **10.2.3 Streaming and Real-Time AI Responses** 

Modern Web backends that employ chatbots, real-time data analysis dashboards, and live content generation require streaming AI responses. Many AI models can return output as a stream rather than as a complete response. Node.js handles streaming responses through following mechanisms: 

## • **Server-Sent Events (SSE)** 

SSE is a Web technology that allows a server to push continuous, real-time updates to a client over a single HTTP connection. Node.js supports SSE using the built-in HTTP response stream. This enables applications to stream LLM responses token-by-token. 

## • **WebSocket** 

A WebSocket is a two-way communication channel that allows both client and server to send messages in real time. Node.js applications can implement WebSocket using libraries such as `ws` or `socket.io` . 

## • **Backpressure Management** 

Backpressure is a built-in mechanism in Node.js that prevents the server from sending data faster than the client can process it. This allows Node.js applications to manage large AI outputs efficiently. 

## **10.3 Overview of AIaaS** 

AIaaS refers to ready-to-use cloud-based AI models that can be accessed through API calls or SDKs. Instead of creating, training, and maintaining AI models from scratch, developers can integrate the required AI capabilities into their Node.js applications with minimal setup and infrastructure cost. Advantages of using AIaaS are as follows: 

|**No GPU infrastructure**|The<br>cloud<br>provider<br>handles<br>the<br>required<br>computational resources to run the AI models.|
|---|---|
|**Access to pre-trained**<br>**models**|As cloud providers regularly update the AI<br>models, developers can gain access to state-<br>of-the-art models.|
|**Simple integration**|Developers can access AI capabilities using<br>simple REST APIs or SDKs.|
|**Lower development and**<br>**maintenance costs**|Developers can pay only for the API usage<br>they consume.|



## **10.3.1 Major AIaaS Providers** 

Several providers are offering AIaaS today. Table 10.1 lists the major AIaaS providers and their features, use cases, and ideal scenarios. 

|**Provider**|**Features**|**Use Cases**|**Ideal**<br>**Scenarios**|
|---|---|---|---|
|OpenAI|• Includes advanced<br>reasoning models.<br>• Provides multimodal<br>capabilities (text,<br>images, or audio).<br>• Includes embeddings<br>for semantic search.|• Chatbots<br>• Content<br>generation<br>• Code assistants<br>• Semantic<br>search|When<br>advanced<br>language<br>understanding<br>and reasoning<br>are required.|
|Google<br>Cloud<br>AI/Gemini|• Includes multimodal<br>capabilities (text,<br>images, or audio).<br>• Supports integration<br>with the Google Cloud<br>ecosystem.<br>• Provides Vision and<br>Optical Character<br>Recognition (OCR)<br>capabilities.<br>• Is cost-effective.|• Document<br>processing<br>• Image<br>classification<br>• Enterprise AI<br>workflows|When the<br>infrastructure is<br>already on<br>Google Cloud<br>or strong vision<br>AI is required.|
|Anthropic<br>Claude|• Provides safe and<br>responsible AI design<br>• Supports large input<br>processing capability<br>(up to 200K tokens).<br>• Provides strong<br>reasoning and<br>instruction-following<br>capability.<br>• Exhibits stable API<br>behaviour.|• Enterprise chat<br>assistants<br>• Document<br>summarization<br>• Knowledge<br>base systems|When safety,<br>explainability,<br>and long-<br>context<br>processing<br>matter.|
|Hugging<br>Face|• Provides access to a<br>wide range of open-<br>source community<br>models for different use<br>cases.<br>• Supports flexible model<br>selection and custom<br>model training.<br>• Offers private inference<br>endpoints for deploying|• Custom model<br>inference<br>• Research<br>• Open-source<br>model<br>deployment|When flexibility<br>and open-<br>source<br>alternatives<br>are preferred.|



|**Provider**|**Features**|**Use Cases**|**Ideal**<br>**Scenarios**|
|---|---|---|---|
||proprietary models<br>securely.|||
|Azure<br>OpenAI and<br>Cognitive<br>Services|• Provides advanced AI<br>services for text<br>generation, vision,<br>speech, and<br>translation.<br>• Offers enterprise-grade<br>security and<br>compliance for<br>business applications.<br>• Integrates with the<br>Microsoft ecosystem.|• Regulated<br>industries<br>• Corporate<br>Microsoft shops|When<br>enterprise<br>security and<br>compliance<br>certifications<br>are required.|



**Table 10.1: Comparison of Major AIaaS Providers** 

## **10.4 Connecting Node.js Applications to AIaaS** 

The first step to access AIaaS providers from Node.js applications is to generate an API key. An API key is an identifier used to authorize access to AI models. All major providers issue API keys. 

Steps to API Key generation are common to all AI providers, which are as follows: 

1. Navigate to the Website of any one of the providers listed in Table 10.1. For example, the Gemini Website, **Google AI Studio** : <u>https://aistudio.google.com/</u> 

2. Sign in or create an account using Google credentials. 

3. From the dashboard, navigate to the **API keys** section. 

4. Click **Create API Key** and follow the on-screen steps to generate the key. 

5. Copy the generated key. 

After generating the API key, the next step is to store it securely. Node.js applications store sensitive values in environment variables inside a `.env` file. 

To store API keys, perform these tasks: 

1. Create a `.env` file in the respective application's project folder. 

2. Store the API key that was copied earlier in an environment variable inside the `.env` file. For example, a Gemini API key can be stored using the environment variable `GEMINI_API_KEY` , as shown in Figure 10.1. The figure shows the `.env` file open in Notepad. 

“|| *,env - Notepad 

_ Oo x 

File Edit Format View Help GEMINI_API_KEY=AIzaSyBByjeIT1SIPnQqEyFNEBGW6rac6Y_gm4M 





```
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // API key passed in a specific header for REST calls
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
        // Handle API errors (e.g., bad request, invalid key,
rate limit)
        const errorData = await response.json();
        throw new Error(`API Error: ${response.status} -
${errorData.error.message}`);
    }
    const jsonResponse = await response.json();
    // Manually navigate the nested JSON structure to find
the text
    const generatedText =
jsonResponse.candidates[0].content.parts[0].text;
    console.log("--- Generated Text (REST API) ---");
    console.log(generatedText);
    console.log("----------------------------------");
  } catch (error) {
    console.error("REST Call Error:", error.message);
  }
}
runRestExample();
```

Code Snippet 1 sends a REST API request to Google's Gemini 2.5 Flash model, receives the response, and prints the output to the console. 

The code begins by loading an API key from either the `GEMINI_API_KEY` environment variable or a fallback string. It uses `process.env` to access the `GEMINI_API_KEY` environment variable. `process.env` is a global object that provides access to environment variables of the current running process. 

It first checks if the API key holds a valid value. If not, it logs an error. It then sets the REST URL pointing to the Gemini 2.5 Flash endpoint and creates a sample prompt text. It then builds the request body with the prompt text in a structured JSON format that Gemini expects for content generation. 

The code in Code Snippet 1 finally uses the `fetch` function to send the REST API request. It uses the `POST` method with the headers and the request body. The headers specify the content type as JSON and include the API key for authentication. If the API request returns an error, the code prints the error 



<!-- Start of picture text -->
IC: \Users\Linda\nodejs>node Geminiservice.js<br>Sending prompt to Gemini via REST: "5 node js best practice in 5 simple lines.”<br>--- Generated Text (REST API) ---<br>Here are 5 Node.js best practices in 5 simple lines:<br>1. **Embrace ~async/await** for clean asynchronous code flow.<br>2. **Implement robust error handling** to prevent crashes.<br>3. **Break code into small, focused modules** for clarity.<br>4. **Use environment variables** for configuration management.<br>5. **Keep the Event Loop non-blocking** to maintain responsiveness.<br><!-- End of picture text -->

C:\Users\Linda\nodejs>npm install @google/genai npm deprecated node-domexception@1.90.0: Use your platform's native DOMException instead added 68 packages in 2s 19 packages are looking for funding run -npm fund for details 



```
// from the environment variables.
const ai = new GoogleGenAI({});
async function runSdkExample() {
  const prompt = "top 5 topics on node js within 5 lines. ";
  console.log(`Sending prompt to Gemini via SDK:
"${prompt}"\n`);
  try {
    // Call the model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    // Extract the text response
    const generatedText = response.text;
    console.log("--- Generated Text (SDK) ---");
    console.log(generatedText);
    console.log("----------------------------");
  } catch (error) {
    console.error("SDK Error:", error.message);
  }
}
runSdkExample();
```

This code begins by importing the SDK. It then creates an instance of `GoogleGenAI` without specifying an API key. This makes the `GoogleGenAI` object automatically look for the API key in the environment variables, `GEMINI_API_KEY` or `GOOGLE_API_KEY,` for authentication. It then creates an asynchronous function `runSdExample` . This function sets a sample prompt text and sends it directly to the Gemini model by invoking `GoogleGenAI.models.generateContent()` . 

If the API call succeeds, the code extracts the response text and prints it to the console. If the call fails, it logs an error message. 

Figure 10.4 shows the output of Code Snippet 2. 

IC: \Users\Linda\nodejs>node GeminiSDKservice.js Sending prompt to Gemini via SDK: “top 5 topics on node js with in 5 lines.” --- Generated Text (SDK) --Here are 5 top topics for Node.js: 1. **Asynchronous Programming (Callbacks, Promises, Async/Await):** Node.js thrives on non-blocking I/O. Mastering Callbacks, Promises, and especially Async/Await is fundamental. These patterns manage concurrent operations without freezing your application. They are crucial for handling network requests, file operations, and database interactions. Essential for writing efficient and scalable Node.js code. 2. **Express.js (Web Framework):** Express.js is the leading web application framework for Node.js. It simplifies building robust APIs and web servers. Provides powerful routing, middleware support, and HTTP utility methods. Highly flexible and forms the backbone of countless Node.js projects. Indispensable for any serious Node.js backend development. 3. **NPM (Node Package Manager):** NPM is the world's largest software registry and package manager. It allows you to easily install, share, and manage project dependencies. You use it to add libraries like Express, Mongoose, or Axios to your project. Understanding ~package.json and basic CLI commands is crucial. Leveraging NPM unlocks the vast ecosystem of Node.js modules. 4. **Database Integration:** Connecting Node.js applications to databases is vital for data persistence. Popular choices include MongoDB (NoSQL) with Mongoose, or PostgreSQL/MySQL (SQL) with ORMs like Sequelize. Learn to perform CRUD (Create, Read, Update, Delete) operations. This involves setting up connections, defining schemas/models, and querying data. Essential for building dynamic, data-driven applications. So ‘WES nail Giiisst Designing and implementing RESTful APIs is a core skill for Node.js backends. It involves defining endpoints, HTTP methods (GET, POST, PUT, DELETE), and status codes. APIs enable different clients (web, mobile) or services to communicate effectively. Focus on creating clean, well-structured, and secure API endpoints. Crucial for building scalable web services and microservices architectures. 



## **10.5 Structuring Prompts and Handling AI Responses in Node.js** 

Well-designed prompts provide an AI model with specific context, required formats, and constraints. Similarly, robust response-handling techniques ensure the application can parse, validate, and use AI-generated content without errors. By implementing these practices, Node.js applications can be designed to deliver stable and high-quality AI-driven features. 

## **10.5.1 Structuring Prompts** 

To ensure reliable AI outputs, prompts must be designed according to certain criteria. These criteria are as follows: 

- **Clear** : Clearly state what the model is expected to do. 

- **Constrained** : Specify the desired output format (for example, "return only JSON"). 

- **Context-aware** : Provide the relevant text or data that the model should work with. 

- **Guarded** : Indicate what the model must not do (example: no extra fields, no explanations). 

- **Structured** : Use machine-friendly formats such as JSON whenever possible. 

Code Snippet 3 demonstrates a structured prompt that instructs Google’s Gemini 2.5 Flash model to analyze an unstructured text block and return only the extracted information formatted as a specific JSON object. 

## **Code Snippet 3:** `Prompt.js` 

```
const GEMINI_API_KEY = process.env.GEMINI_API_KEY ||
"AIzaSyCvhknDYrxzpUadhFxP-_dQXFaSvcCOdpE";
if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY not set!");
  process.exit(1);
}
const apiUrl =
"https://generativelanguage.googleapis.com/v1beta/models/gemi
ni-2.5-flash:generateContent";
async function postPrompt(prompt) {
  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
  };
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
```

```
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify(requestBody),
  });
  const json = await response.json();
  if (!response.ok || !json.candidates) {
    console.error("Error from Gemini API:", json.error ||
json);
    throw new Error(`API request failed with status
${response.status}`);
  }
  // Handle cases where the model returns no content
  const text = json.candidates[0]?.content?.parts[0]?.text;
  return text || "";
}
// Hard-coded strict extraction prompt
const prompt = `
Extract this data and return ONLY this JSON:
{
  "customer_name": "",
  "order_id": "",
  "total_amount": 0
}
No explanation. No extra fields.
TEXT:
"Customer Name: Alice
Order ID: A-123
Total: $45.50"
`;
postPrompt(prompt)
  .then((res) => console.log("Approach #1 (Strict Prompt)
Output:\n", res))
  .catch(console.error);
```

After loading the API key and setting the API URL, the code defines an asynchronous function, `postPrompt` , that sends the prompt to the model using the REST API. It then defines a highly structured prompt that directs the model to adhere to specific instructions. 

Figure 10.5 shows the output of Code Snippet 3. 

C:\Users\Linda\nodejs>node Prompt.js5 Approach #1 (Strict Prompt) Output: ~~~ json os Ls "“customer_name™: “Alice”, “order_id™: “"A-123", “total amount": 45.56 

J 





```
if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY not set!");
  process.exit(1);
}
const apiUrl =
"https://generativelanguage.googleapis.com/v1beta/models/gemi
ni-2.5-flash:generateContent";
async function postPrompt(prompt) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  const json = await response.json();
  return json.candidates[0].content.parts[0].text;
}
// STRICT JSON prompt
const prompt = `
Return ONLY JSON:
{"customer_name":"John","order_id":"X9","total_amount":100}
`;
function safeJSONParse(str) {
  try {
    return { ok: true, data: JSON.parse(str) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
postPrompt(prompt)
  .then((res) => {
    console.log("Raw AI Output:", res);
    const parsed = safeJSONParse(res);
    console.log("Approach #3 (Safe JSON Parse) Result:",
parsed);
  })
  .catch(console.error);
```

This function `safeJSONParse` converts the JSON-formatted AI response into a JavaScript object using a try-catch block. When the AI response is valid JSON, the function returns an object containing `ok: true` and the successfully parsed value in the `data` field. If parsing fails, the `catch` block extracts the resulting error, and the function returns an object with `ok: false` and an explanatory message stored in the `error` field. Finally, the code prints both the raw AI output and the parsed result to the console. 

C:\Users\Linda\nodejs>node ParsingExample.js Raw AI Output: ~~~ json {"customer_name":"John", "order_id":"X9", “total_amount" :100} Approach #3 (Safe JSON Parse) Result: { ok: > error: 

~~CT~~ 

C2\Users\Linda\nodejs>npm install ajv added 5 packages, and audited 74 packages in 15 21 packages are looking for funding run npm fund” for details Found wulnerabilities 





C:\Users\Linda\nodejs>node SchemaValidation.]s Raw: {"customer_name":"Mary","order_id":"0-77","total_amount":55.5} Approach #4 (AJV Schema Validation): Valid Data: { customer_name: , order_id: , total_amount: } 

## **10.5.4 Sanitizing and Rate Limiting** 

Applications can be vulnerable to prompt injection attacks when they insert user-supplied inputs that is not sanitized into the AI prompt. Such malicious input can manipulate the model's behavior, leading the AI to produce unintended responses. 

To prevent prompt injection attacks: 

- Sanitize or filter user input before including it in prompts. 

- Handle user text as data instead of as additional instructions. 

- Implement rate limiting on AI endpoints. 

Code Snippet 6 sanitizes a simulated malicious user input and sends the cleaned text to the Gemini API. 

**Code Snippet 6:** `SanitizePrompt.js` 

```
const GEMINI_API_KEY = process.env.GEMINI_API_KEY ||
"AIzaSyCvhknDYrxzpUadhFxP-_dQXFaSvcCOdpE";
if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY not set!");
  process.exit(1);
}
const apiUrl =
"https://generativelanguage.googleapis.com/v1beta/models/gemi
ni-2.5-flash:generateContent";
async function postPrompt(prompt) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  const json = await response.json();
  return json.candidates[0].content.parts[0].text;
}
// Sanitizer
function sanitizeInput(text) {
  return text
    .replace(/ignore previous/gi, "")
    .replace(/system prompt/gi, "")
    .replace(/override/gi, "")
    .trim();
```



C:\Users\Linda\nodejs>node Sanitizeprompt-.js Approach #5 (Sanitized Prompt) Output: ~~~ 4s0n SF 1 “customer_name™: “Sara”, “order _id™: "9", “total amount": 30 1 J 



```
const apiUrl =
"https://generativelanguage.googleapis.com/v1beta/models/gemi
ni-2.5-flash:generateContent";
let lastCall = 0;
function rateLimit(minIntervalMs) {
  const now = Date.now();
  if (now - lastCall < minIntervalMs) {
    throw new Error(
      `Rate limited: must wait ${
        minIntervalMs - (now - lastCall)
      }ms before next request`
    );
  }
  lastCall = now;
}
async function postPrompt(prompt) {
  rateLimit(2000); // 2 seconds limit
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  const json = await response.json();
  return json.candidates[0].content.parts[0].text;
}
// Hard-coded prompt
const prompt = `Return JSON {"customer":"Zed"}`;
(async () => {
  try {
    console.log("Call #1:");
    console.log(await postPrompt(prompt));
    console.log("Call #2 (should rate-limit):");
    console.log(await postPrompt(prompt));
  } catch (err) {
    console.error("Approach #6 Error:", err.message);
  }
})();
```

C:\Users\Linda\nodejs>node RateLimiter.js Call #1: ~*~ json {"customer":"Zed"} Call #2 (should rate-limit): Approach #6 Error: Rate limited: must wait 433ms before next request 



<!-- Start of picture text -->
TT ee eee<br><!-- End of picture text -->



~~<u><mark>Co</mark></u>~~ 

-\Users\Linda\nodejs>npm install @tensorflow/tfis dded 68 packages, and audited 142 packages in Ss 8 packages are looking for funding run -npm fund” for details Found vulnerabilities 



```
    const x_values = [1, 2, 3, 4, 5, 6]; // Input features
(X)
    const y_values = [1, 3, 5, 7, 9, 11]; // Target labels
(Y)
    // Convert regular arrays to TensorFlow Tensors
    const xs = tf.tensor2d(x_values, [x_values.length, 1]);
    const ys = tf.tensor2d(y_values, [y_values.length, 1]);
    console.log("Training Data (X):", x_values);
    console.log("Training Data (Y):", y_values);
    console.log("-------------------------------------");
    // 2. Define the Model Architecture
    // Create a sequential model (a linear stack of layers)
    const model = tf.sequential();
    // Add a single Dense layer (a simple linear layer: y =
Wx + b)
    model.add(tf.layers.dense({
        units: 1,       // 1 output unit (for y)
        inputShape: [1] // 1 input feature (for x)
    }));
    // 3. Compile the Model (Configure learning process)
    model.compile({
        loss: 'meanSquaredError', // How to measure error
(loss)
        optimizer: 'sgd'          // Stochastic Gradient
Descent (how to adjust weights)
    });
    console.log("Model Compiled. Starting Training...");
    // 4. Train the Model (The learning process)
    const history = await model.fit(xs, ys, {
        epochs: 500, // Number of times to iterate over the
data
        callbacks: {
            // Optional: Log the loss every 100 epochs
            onEpochEnd: (epoch, logs) => {
                if (epoch % 100 === 0) {
                    console.log("Epoch"+ epoch +": Loss =" +
logs.loss.toFixed(6));
                }
            }
        }
    });
    console.log("Training Complete. Final Loss:" +
history.history.loss.slice(-1)[0].toFixed(6));
    console.log("-------------------------------------");
    // 5. Make a Prediction
    const inputX = 10;
    const predictionTensor =
model.predict(tf.tensor2d([inputX], [1, 1]));
    // Get the result from the tensor
    const predictedY = predictionTensor.dataSync()[0];
    console.log("Input (X):" + inputX);
```



IC: \Users\Linda\nodejs>node TensorFlow.js --Starting TensorFlow.js Example --Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visi it https://github.com/tensorflow/tfjs-node for more details. Training Data (X): [ 1, 2, 3, 4, 5, ] Training Data (Y): [ 1, 3, 5, 7, 9, ] Model Compiled. Starting Training... Epoch@: Loss =87.334435 Epoch10@: Loss =0.216898 Epoch20@: Loss =0.104397 Epoch30@: Loss =@.050249 Epoch4@@: Loss =@.024186 Training Complete. Final Loss:@.@11726 Input (X):10 Prediction (Y):18.6714 

~~LT~~ 

C:\Users\Linda\nodejs>npm install --save brain.js@1.4.10 

added 4 packages, and audited 247 packages in 4s 31 packages are looking for funding run “npm fund” for details 

Found vulnerabilities 





C:\Users\Linda\nodejs>node Brain.js5 Starting training... Training complete! Training Statistics: { error: » iterations: } Testing network predictions: Input: [@, @] -> Output: ©.6587 (Rounded: ©) Input: [@, 1] -> Output: @.9341 (Rounded: 1) Input: [1, @] -> Output: ©.93427 (Rounded: 1) Input: [1, 1] -> Output: @.6878 (Rounded: 60) 



<!-- Start of picture text -->
C:\Users\Linda\nodejs>npm install ml<br>added 100 packages, and audited 242 packages in 145<br>31 packages are looking for funding<br>run “npm fund” for details<br>‘Found vulnerabilities<br>C:\Users\Linda\nodejs>npm install brain<br>npm deprecated brain@1.0.0: Package no longer supported. Contact support@npmjs.com for more info.<br>added 1 package, and audited 243 packages in 35<br>31 packages are looking for funding<br>run ~npm fund for details<br><!-- End of picture text -->

C:\Users\Linda\nodejs>npm install ml added 100 packages, and audited 242 packages in 145 31 packages are looking for funding run “npm fund” for details ‘Found vulnerabilities C:\Users\Linda\nodejs>npm install brain npm deprecated brain@1.0.0: Package no longer supported. Contact support@npmjs.com for more info. added 1 package, and audited 243 packages in 35 31 packages are looking for funding run ~npm fund for details 



C:\Users\Linda\nodejs>node mlserwice.js [ 5 ] 







|**Ethical and Privacy**<br>**Factor**|**Issue**|**Solution**|
|---|---|---|
|Compliance|Violations occur under<br>regulations such as<br>General Data Protection<br>Regulation (GDPR),<br>California Consumer<br>Privacy Act (CCPA), and<br>Health Insurance<br>Portability and<br>Accountability Act<br>(HIPAA).|• Map data flows.<br>• Implement data<br>subject rights (access,<br>deletion).<br>• Use data processing<br>agreements.|
|Security|Prompt injection attacks<br>abuse AI endpoints.|• Validate and sanitize<br>inputs.<br>• Implement rate-limiting.<br>• Authenticate all ML<br>endpoints.|



## **Table 10.5: Responsible AI Deployment: Ethical and Privacy Controls** 

## **10.7.1 Best Practices for Responsible AI** 

Best practices help ensure that AI systems built with Node.js remain safe, fair, and trustworthy. They help implement privacy, transparency, security, and responsible model behavior throughout development and deployment. 

Some of the best practices for implementing responsible AI are as follows: 

### **Privacy by Design** 

Minimize data collection. Use encryption in transit and at rest. Implement access controls (least privilege). 

### **Transparency** 

Document how AI makes decisions. Provide model cards explaining capabilities and limitations. Disclose use of AI to users. 

### **Fairness and Bias Testing** 

Evaluate model performance across demographics. Test edge cases and adversarial inputs. Monitor for unexpected model drift. 

## **Human-in-the-Loop** 

Require human review for high-stakes decisions (finance, healthcare, and hiring). Flag low-confidence predictions. Enable appeals and manual overrides. 

### **Monitoring and Auditing** 

Log AI model decisions and explain them. Monitor model performance and input distribution. Maintain audit trails for compliance. 

### **Secure Development** 

Use `npm audit` to check for vulnerable dependencies. Avoid running untrusted native code. Isolate model execution with sandboxing. Enforce rate limits on AI endpoints. 

## **10.8 Summary** 

- ➢ Modern Node.js backends integrate AI to automate decisions, personalize experiences, and process data intelligently. 

- ➢ Node.js acts as an orchestration layer, validating inputs, calling AI models, merging results with business logic, and handling streaming responses. 

- ➢ AIaaS allows the use of cloud AI models through REST API or SDK calls. 

- ➢ Major AIaaS providers include Hugging Face, AWS Bedrock, OpenAI, Google Gemini, and Anthropic Claude. 

- ➢ AI prompts must be clear, constrained, context-rich, and structured, preferably requesting JSON for easy parsing. 

- ➢ Safe AI usage requires schema validation, defensive JSON parsing, and sanitizing user input to prevent prompt injection. 

- ➢ Node.js can run AI locally using AI/ML libraries such as TensorFlow.js, Brain.js, and ml.js for lightweight tasks. 

- ➢ Ethical and privacy considerations, such as data minimization, fairness, compliance, and secure handling are critical when integrating AI into backend systems. 

**Test Your Knowledge** 

1. What is the primary role of Node.js in modern AI-powered backends? 

   - a) Designing UI components 

   - b) Orchestrating AI calls and business logic 

   - c) Replacing databases 

   - d) Compiling machine-learning models 

## 2. What does AIaaS mean? 

   - a) Running AI models locally 

   - b) Training deep learning models manually 

   - c) Using cloud-hosted AI models through APIs 

   - d) Deploying AI on mobile devices 

3. Which provider offers strong multimodal and vision capabilities? 

   - a) Anthropic Claude 

   - b) Google Gemini 

   - c) AWS Bedrock 

   - d) Brain.js 

4. Which library is used for advanced ML in Node.js? 

   - a) Brain.js 

   - b) TensorFlow.js 

   - c) ml.js 

   - d) Express.js 

5. When is local ML preferred over cloud AI? 

   - a) When high accuracy is required 

   - b) When GPU clusters are available 

   - c) When models are too large 

   - d) When offline or high-privacy scenarios exist 

## **Answers to Test Your Knowledge** 

|1|b|
|---|---|
|2|c|
|3|b|
|4|b|
|5|d|



**Try It Yourself** 

1. Create a well-structured prompt that asks an AI model to extract product details (name, price, and category) from a customer message. Include JSON output rules. 

2. Build a simple AI API route in Node.js. 

   - Use Express.js to write a small endpoint. 

   - Accept text in the request body. 

   - Send it to an AI provider (REST call or SDK). 

   - Return the summarized response. 

3. Use an AI/ML library. • Create a small script that predicts a simple linear function such as y = 3x + 1. 

   - Display training data, model creation, and one prediction. 



<!-- Start of picture text -->
We .<br>7<br><!-- End of picture text -->

SESSION 11 



# BUILDING AI-ENHANCED WEBSITES USING NODE.JS 





<!-- Start of picture text -->
User<br>New<br>authentication<br>membership<br><!-- End of picture text -->



<!-- Start of picture text -->
Existing<br>members and<br>administrators<br>should enter the<br>username and<br>password to<br>access the<br>application.<br><!-- End of picture text -->



<!-- Start of picture text -->
A new<br>member<br>can create<br>their<br>member<br>login using<br>the online<br>form.<br><!-- End of picture text -->



<!-- Start of picture text -->
Existing<br>membership<br>An existing<br>member<br>can login to<br>the<br>application<br>and view<br>the<br>available<br>book list.<br><!-- End of picture text -->



**Figure 11.1: Library Application** 

A broad list of steps in creating the library application is as follows: 



<!-- Start of picture text -->
Retrieve the database deployment's connection string.<br>Create the library application in Node.js integrating the AI feature.<br>Upload the library application to the GitHub repository.<br>Deploy the library application on Render from a GitHub repository.<br>Access the library application in Web browser.<br><!-- End of picture text -->

## **11.2 Retrieving the Connection String from MongoDB Cloud** 

The prerequisite in creating the library application is to deploy a database in MongoDB cloud and retrieve the database deployment’s connection string. The connection string is then used to connect the `Library` application with the cloud database for storing, retrieving, and processing data. 

Here are the steps to be executed for achieving the task. 

1. Create a new/Use an existing MongoDB Atlas account 

2. Deploy a free cluster 

3. Create a database user for the free cluster 

4. Save the connection string to use it in the Node.js application 

5. Add a trusted IP address to the authorized IP access list 

Refer to Appendix A for a detailed description on how to obtain the connection string from the MongoDB cloud. 











<!-- Start of picture text -->
C:\Users\Linda\nodejs\library_application>npm init -y<br>Wrote to C:\Users\Linda\nodejs\library_application\package.json:<br>"name": “library_application",<br>"version": "1.6.0",<br>“main”: “index.js",<br>“scripts”: {<br>“test": "echo \"Error: no test specified\" && exit 1”<br>"keywords": [],<br>"author": "",<br>"license": "ISC",<br>"description": ""<br><!-- End of picture text -->















<!-- Start of picture text -->
C:\Users\Linda\nodejs\library_application>npm install passport express ejs mongoose body-parser express-session passport<br>-local passport-local-mongoose @tensorflow/tfjs@3.21.@ axios @tensorflow-models/universal-sentence-encoder<br>up to date, audited 164 packages in 1s<br>29 packages are looking for funding<br>run “npm fund for details<br>found @ vulnerabilities<br><!-- End of picture text -->



<!-- Start of picture text -->
C:\Users\Linda\nodejs\library_application>dir<br>Volume in drive C has no label.<br>Volume Serial Number is D@B3-DO1F<br>Directory of C:\Users\Linda\nodejs\library_application<br>12/08/2025 06:52 PM <DIR> -<br>12/08/2025 66:52 PM <DIR> --<br>12/08/2025 06:52 PM <DIR> node_modules<br>12/08/2025 @6:52 PM 68,452 package-lock.json<br>12/08/2025 06:52 PM 551 package.json<br>2 File(s) 69,003 bytes<br>3 Dir(s) 150,403,530,752 bytes free<br><!-- End of picture text -->

project. The `package-lock.json` file includes the complete details of all the packages installed in the project. 

4. Open the `package.json` file in VS Code. Edit the file to update the value of the `main` field and to include the `engines` and `node` fields, as shown in Code Snippet 1. 

## **Code Snippet 1:** `package.json` 

```
{
  "name": "library_application",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@tensorflow-models/universal-sentence-encoder":
"^1.3.3",
    "@tensorflow/tfjs": "^3.21.0",
    "axios": "^1.13.2",
    "body-parser": "^2.2.1",
    "ejs": "^3.1.10",
    "express": "^5.2.1",
    "express-session": "^1.18.2",
    "mongoose": "^9.0.1",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^9.0.0"
  },
 "engines": {
 "node": "22.21.1"
 }
}
```

Save and close the updated `package.json` file. 

## **11.3.2 Creating Folders in the Project** 

To organize the project structure, create the required folders and subfolders as shown in Figure 11.6. 



<!-- Start of picture text -->
a7<br>library_application Contains the project metadata file and main entry point file<br>— ia<br>node modules Contains packages<br>a= Contains data models and schemas<br>model<br>Vd Contains Embedded JavaScript (EJS) Files<br>views<br>+— a7 Contains JavaScript .files that handle the integration°<br>logic for TensorFlow<br>services<br>=. = Contains: stylesheets<br>public images Contains Images<br><!-- End of picture text -->



```
  },
});
module.exports = mongoose.model("User", UserSchema);
```

Code Snippet 2 imports the `mongoose` package and defines a schema that specifies the structure of the `User` collection. The schema defines two fields, `username` and `password` and their data types. `mongoose.model('User', User)` creates a model object called `User` based on the `User` schema. Mongoose creates a collection based on the `User` model. It automatically assigns the name of the collection as `users` , which is a plural, lowercased version of the model’s name.  Finally, the code exports the model for use in other parts of the application. 

## **2. Create Book.js** 

Code Snippet 3 defines a Book model to store book details in the `Library` database. 

**Code Snippet 3** : `Book.js` 

```
const mongoose = require("mongoose");
const bookForAiSchema = new mongoose.Schema({
  bookID: Number,
  title: String,
  authors: String,
  average_rating: Number,
  ratings_count: Number,
  text_reviews_count: Number,
  publication_date: String,
  publisher: String,
});
const BookForAi = mongoose.model("BookForAi",
bookForAiSchema, "booksforai");
module.exports = BookForAi;
```

The code creates a `Schema` object called `bookForAiSchema` . It then creates a `model` called `BookForAi` based on the `bookForAiSchema` . As models represent collections, Mongoose creates a collection based on the `BookForAi` model in the `Library` database. This Code Snippet assigns the name of the collection as `booksforai` and exports the `BookForAi` model to make it accessible in another file or project. Save the code with the file name `Book.js` in the `model` folder. 

## • **Creating Template Files in the** **`views` Folder** 

To render HTML pages for the application, create the template files or `.ejs` files in the `views` folder. The `.ejs` files are used to provide the HTML markups by embedding the required JavaScript in the main Node.js application file, `app.js` . 

## **1. Create** **`register.ejs`** 

Code Snippet 4 demonstrates the HTML code for the registration form for new library members. The completed form, when submitted, will be delivered to the `/register` endpoint for further processing. Save the code with the file name `register.ejs` in the `views` folder. 

**Code Snippet 4** : `register.ejs` 

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css"
href="/css/register.css">
    <title>Sign up for Library Member</title>
</head>
<body>
<div class="container">
    <!-- Left image (same as home layout) -->
    <div class="left">
        <img src="/images/libraryimage.jpg"
alt="Image 1">
    </div>
    <!-- Right popup area -->
    <div class="right">
        <h1>Sign up Form for Library Member</h1>
        <form action="/register" method="POST"
class="form-table">
            <table>
                <tr>
                    <td><label
for="username">Username</label></td>
                    <td><input type="text"
name="username" id="username" required
placeholder="Username" autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="password">Password</label></td>
                    <td><input type="password"
name="password" id="password" required
placeholder="Password"></td>
                </tr>
```

```
                <tr>
                    <td></td>
                    <td><button>Sign-
UP</button></td>
                </tr>
            </table>
        </form>
        <p><a href="/logout">Return To Home
Page</a></p>
    </div>
</div>
</body>
</html>
```

## **2. Create** **`login.ejs`** 

Code Snippet 5 demonstrates the HTML code for the application’s login form. The completed form, when submitted, will be delivered to the `/login` endpoint for further processing. Save the code with the file name `login.ejs` in the `views` folder. 

**Code Snippet 5** : `login.ejs` 

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css"
href="/css/register.css">
    <title>Member Login</title>
</head>
<body>
<div class="container">
    <!-- Left Side (Image) -->
    <div class="left">
        <img src="/images/libraryimage.jpg" alt="Image
1">
    </div>
    <!-- Right Side (Popup Box) -->
    <div class="right">
        <h1>Member Login</h1>
        <form action="/login" method="POST" class="form-
table">
        <table>
                <tr>
                    <td><label
for="username">Username</label></td>
                    <td><input type="text"
name="username" required id="username"
placeholder="Username" autocomplete="off"></td>
                </tr>
```

```
                <tr>
                    <td><label
for="password">Password</label></td>
                    <td><input type="password"
name="password" required id="password"
placeholder="Password"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button>Login</button></td>
                </tr>
            </table>
        </form>
        <p><a href="/logout">Return To Home Page</a></p>
    </div>
</div>
</body>
</html>
```

## **3. Create** **`home.ejs`** 

Code Snippet 6 demonstrates the HTML code for the application’s home page. On the home page of the application, the user can: 

- Sign up as a new member 

- Login as an existing member 

- Login as an administrator 

Save the code with the file name `home.ejs` in the `views` folder. 

**Code Snippet 6** : `home.ejs` 

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css"
href="/css/home.css">
    <title>Member Login</title>
</head>
<body>
<div class="container">
    <div class="left">
        <img class="library-image"
src="/images/libraryimage.jpg" alt="Library Image">
    </div>
    <div class="right">
        <div class="content-box">
            <h1>Library  Home</h1>
            <div class="links">
```

```
                <a href="/register">Sign-up for Member
User</a>
                <a href="/login">Member Login</a>
                <a href="/admin">Administrator Login</a>
            </div>
        </div>
    </div>
</div>
</body>
</html>
```

## **4. Create** **`admin-login.ejs`** 

Code Snippet 7 demonstrates the HTML code for the administrator’s login page. Administrators can enter their username and password in the login form. The completed form, when submitted, will be sent to the `/adminlogin` endpoint for further processing. 

Save the code with the file name `admin-login.ejs` in the `views` folder. 

**Code Snippet 7** : `admin-login.ejs` 

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css"
href="/css/register.css">
    <title>Admin Login</title>
</head>
<body>
<div class="container">
    <div class="left">
        <img src="/images/libraryimage.jpg" alt="Image
1">
    </div>
    <div class="right">
        <h1>Admin Login</h1>
        <form action="/admin-login" method="post"
class="form-table">
            <table>
                <tr>
                    <td><label
for="username">Username</label></td>
                    <td><input type="text"
name="username" required id="username"
placeholder="Username" autocomplete="off"></td>
                </tr>
                <tr>
```

```
                    <td><label
for="password">Password</label></td>
                    <td><input type="password"
name="password" required id="password"
placeholder="Password"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button>Login</button></td>
                </tr>
            </table>
        </form>
        <p><a href="/logout">Return To Home Page</a></p>
    </div>
</div></body></html>
```

## **5. Create** **`admin-dashboard.ejs`** 

Code Snippet 8 demonstrates the HTML code for the admin dashboard page. On this page, the administrators can add new book details to the library's `booksforai` collection. On clicking the **Add Book** button, the completed form will be sent to the `/admin-dashboard/add-book` endpoint for further processing. Save the code with the file name `admindashboard.ejs` in the `views` folder. 

**Code Snippet 8** : `admin-dashboard.ejs` 

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css"
href="/css/admindash.css">
    <title>Admin Dashboard - Add Book</title>
</head>
<body>
<div class="container">
    <!-- Left image -->
    <div class="left">
        <img src="/images/libraryimage.jpg" alt="Library
Image">
    </div>
    <!-- Right popup form -->
    <div class="right">
        <h1>Create Book Detail</h1>
        <form action="/admin-dashboard/add-book"
method="post" class="form-table">
            <table>
                <tr>
```

```
                    <td><label for="bookID">Book
ID:</label></td>
                    <td><input type="number"
name="bookID" id="bookID" required
autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="title">Title:</label></td>
                    <td><input type="text" name="title"
id="title" required autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="authors">Authors:</label></td>
                    <td><input type="text" name="authors"
id="authors" required autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="average_rating">Average Rating:</label></td>
                    <td><input type="number" step="0.01"
name="average_rating" id="average_rating" required
autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="ratings_count">Ratings Count:</label></td>
                    <td><input type="number"
name="ratings_count" id="ratings_count" required
autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="text_reviews_count">Text Reviews Count:</label></td>
                    <td><input type="number"
name="text_reviews_count" id="text_reviews_count"
required autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="publication_date">Publication Date:</label></td>
                    <td><input type="text"
name="publication_date" id="publication_date" required
autocomplete="off"></td>
                </tr>
                <tr>
                    <td><label
for="publisher">Publisher:</label></td>
```

```
                    <td><input type="text"
name="publisher" id="publisher" required
autocomplete="off"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Add
Book</button></td>
                </tr>
            </table>
        </form>
        <p><a href="/logout">Logout</a></p>
    </div>
</div>
</body>
</html>
```

## **6. Create** **`booklist.ejs`** 

Code Snippet 9 demonstrates the HTML code of a view that displays the list of books retrieved from the `booksforai` collection. The use of embedded JavaScript (< `% %` >) shows that: 

- Data is retrieved and displayed dynamically by a server-side application. 

- Book data is injected into the HTML template at runtime. 

Save the code with the file name `booklist.ejs` in the `views` folder. 

**Code Snippet 9** : `booklist.ejs` 

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css"
href="/css/bookstyle.css">
    <title>List of Books</title>
</head>
<body>
<div class="page-wrapper">
    <div class="card">
        <h1>List of Books</h1>
        <table>
            <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Avg. Rating</th>
                <th>Publisher</th>
                <th>Publication Date</th>
```

```
            </tr>
            <% books.forEach(function(book) { %>
            <tr>
                <td><%= book.bookID %></td>
                <td><%= book.title %></td>
                <td><%= book.authors %></td>
                <td><%= book.average_rating %></td>
                <td><%= book.publisher %></td>
                <td><%= book.publication_date %></td>
            </tr>
            <% }); %>
        </table>
        <div class="button-row">
            <a href="/tensorflow-chat" class="btn">Ask
TensorFlow</a>
        </div>
        <div class="button-row logout-row">
            <a href="/logout" class="btn logout-
btn">Logout</a>
        </div>
    </div>
</div>
</body>
</html>
```

## **7. Create** **`tensorflowChat.ejs`** 

Code Snippet 10 demonstrates the HTML code to create a Web-based chat interface that allows users to interact with the TensorFlow AI model. 

**Code Snippet 10:** `tensorflowChat.ejs` 

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-
scale=1.0">
<title>TensorFlow Chat</title>
<link rel="stylesheet" href="/css/chat.css">
<script
src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><
/script>
</head>
<body>
<div class="chat-header">
    <button class="back-button" onclick="goBack()">←
Back</button>
    <h1>Tensor Flow Chat</h1>
</div>
```

```
<div id="chat-container">
    <!-- Chat messages -->
    <div id="chat-window">
        <div class="gemini-message message">How can I help
you today?</div>
    </div>
    <!-- Loading indicator -->
    <div class="loading-indicator" style="display:none;">Bot
is thinking...</div>
    <!-- Input form inside the same container -->
    <form id="chat-form">
        <input type="text" id="prompt-input"
placeholder="e.g., books about space travel"
autocomplete="off">
        <button type="submit" id="send-button">Send</button>
    </form>
</div>
<script>
const form = document.getElementById('chat-form');
const input = document.getElementById('prompt-input');
const sendButton = document.getElementById('send-button');
const chatWindow = document.getElementById('chat-window');
const loadingIndicator = document.querySelector('.loading-
indicator');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const prompt = input.value.trim();
    if (!prompt) return;
    addMessage(prompt, 'user-message');
    input.value = '';
    sendButton.disabled = true;
    loadingIndicator.style.display = 'block';
    chatWindow.scrollTop = chatWindow.scrollHeight;
    try {
        const res = await axios.post('/tensorflow-chat', {
prompt });
        addMessage(res.data.response, 'gemini-message');
        if(res.data.books && res.data.books.length){
            const bookList = res.data.books.map(b => `•
${b.title} by ${b.authors || 'N/A'}`).join('\n');
            addMessage(bookList, 'gemini-message');
        }
    } catch (err) {
        console.error(err);
        addMessage('Sorry, something went wrong.', 'gemini-
message');
    } finally {
        sendButton.disabled = false;
        loadingIndicator.style.display = 'none';
        chatWindow.scrollTop = chatWindow.scrollHeight;
```

```
    }
});
function addMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `${className} message`;
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
function goBack() {
    history.back();
}
</script>
</body>
</html>
```

Code Snippet 10 forwards user prompts to the `/tensorflow-chat` backend route. This route forwards the input to the USE model. The model then returns the generated response. Save the code with the file name `tensorflowChat.ejs` in the `views` folder. 

## • **Adding Stylesheets and Images in the** **`public` Folder** 

Next, include the required `.css` and image files in the `public\css` and `public\images` folders, respectively. 

## **1. Create** **`register.css`** 

Code Snippet 11 shows the stylesheet for the new member registration form. Save the code with the file name `register.css` in the `public\css` folder. 

## **Code Snippet 11** : `register.css` 

```
/* register.css */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
}
.container {
    display: flex;
    height: 100vh;
    width: 100%;
}
.left {
    flex: 7; /* 70% */
    background-color: #f0f0f0;
    display: flex;
```

```
    justify-content: center;
    align-items: center;
}
.left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.right {
    flex: 5;
    background-color: #f5e9d7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
/* White popup box */
.form-table {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 70%;
    max-width: 380px;
    text-align: center;
}
/* Title styling */
h1 {
    margin: 0 0 25px 0;
    padding: 6px 12px;
    color: #333;
}
/* Table layout */
table {
    width: 100%;
    border-collapse: collapse;
}
table td {
    padding: 10px 0;
    text-align: left;
}
/* Inputs */
input {
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
/* Button matching brown theme */
button {
```

```
    width: 100%;
    padding: 12px;
    background-color: #c49b6a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}
button:hover {
    background-color: #a67c52;
}
/* Home link */
p a {
    text-decoration: none;
    color: #333;
}
```

## **2. Create** **`home.css`** 

Code Snippet 12 shows the stylesheet for the application’s home page. Save the code with the file name `home.css` in the `public\css` folder. 

**Code Snippet 12** : `home.css` 

```
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
}
.container {
    display: flex;
    height: 100vh;
    width: 100%;
}
.left {
    flex: 50%;
}
.right {
    flex: 50%;
}
.left {
    background-color: #f0f0f0; /* A light background
for the image side */
}
.library-image {
    width: 100%;
    height: 100%;
```

```
    object-fit: cover; /* This makes the image cover
the entire div without distortion */
}
.right {
    flex: 5;
    background-color: #f5e9d7;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content-box {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
    width: 70%;
    max-width: 320px;
}
.content-box h1 {
    margin-top: 0;
    margin-bottom: 25px;
    color: #333;
    padding: 0px 10px; /* Y = 6, X = 12 */
}
.links a {
    display: block;
    background-color: #c49b6a;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}
.links a:hover {
    background-color: #a67c52;;
}
```

## **3. Create** **`bookstyle.css`** 

Code Snippet 13 shows the stylesheet for displaying the book details. Save the code with the file name `bookstyle.css` in the `public\css` folder. 

**Code Snippet 13** : `bookstyle.css` 

```
body, html {
    margin: 0;
padding: 0;
```

```
    font-family: Arial, sans-serif;
    background: #f5e9d7;
}
.page-wrapper {
    display: flex;
    justify-content: center;
    padding: 0 0;
}
.card {
    width: 100%;
    max-width: 100%;
    background: white;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
}
h1 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}
table th, table td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}
table th {
    background: #c49b6a;
    color: white;
}
table tr:hover {
    background: #f8f1e7;
}
.btn {
    display: inline-block;
    padding: 12px 25px;
    background-color: #a67c52; /* default color for
chat buttons */
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}
.btn:hover {
```

```
    background-color: #8b5e3c;
}
/* Logout button */
.logout-btn {
    background-color: #d9534f; /* red for logout */
}
.logout-btn:hover {
    background-color: #c9302c;
}
.button-row {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
}
.logout-row {
    justify-content: flex-end;
}
.logout-btn {
    background-color: #d9534f;
}
.logout-btn:hover {
    background-color: #c9302c;
}
.logout {
    display: block;
    margin-top: 15px;
    text-decoration: none;
    color: #333;
}
.logout:hover {
    text-decoration: underline;
}
```

## **4. Create** **`admindash.css`** 

Code Snippet 14 shows the stylesheet for administrator dashboard. Save the code with the file name `admindash.css` in the `public\css` folder. 

**Code Snippet 14** : `admindash.css` 

```
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
}
.container {
    display: flex;
    height: 100vh;
```

```
    width: 100%;
}
.left {
    flex: 7; /* 70% */
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.right {
    flex: 5;
    background-color: #f5e9d7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
/* White popup box */
.form-table {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 70%;
    max-width: 500px;
    text-align: center;
}
/* Title styling */
h1 {
    margin: 0 0 25px 0;
    padding: 6px 12px;
    color: #333;
}
/* Table layout */
table {
    width: 100%;
    border-collapse: collapse;
}
table td {
    padding: 10px 0;
    text-align: left;
}
/* Inputs */
input {
    width: 100%;
padding: 12px;
```

```
    margin-top: 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
/* Button matching brown theme */
button {
    width: 100%;
    padding: 12px;
    background-color: #c49b6a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}
button:hover {
    background-color: #a67c52;
}
/* Home / Logout link */
p a {
    text-decoration: none;
    color: #333;
    margin-top: 15px;
    display: inline-block;
}
```

## **5. Create chat.css** 

Code Snippet 15 shows the stylesheet for the AI chat interface. Save the code with the file name `chat.css` in the `public\css` folder. 

**Code Snippet 15:** chat.css 

```
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana,
sans-serif;
    background-color: #f5e9d7;
}
h1 {
    text-align: center;
    color: #333;
    margin-top: 30px;
    font-size: 28px;
}
#chat-container {
    max-width: 700px;
    margin: 40px auto;
    background: #fff;
```

```
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    height: 75vh;
    overflow: hidden;
    width: 90%;
    box-sizing: border-box;
}
#chat-window {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #f9f9f9;
    scroll-behavior: smooth;
}
/* Base message style */
.message {
    padding: 14px 20px;
    border-radius: 25px;
    max-width: 70%;
    line-height: 1.6;
    word-wrap: break-word;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.3s forwards;
    position: relative;
    font-size: 15px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.08);
}
/* Typing effect for Gemini */
.gemini-message.typing::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: #555;
    animation: blink 1s infinite;
}
/* Animations */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

```
@keyframes blink {
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
}
/* User vs Gemini messages */
.user-message {
    background: #f5e9d7;
    color: black;
    align-self: flex-end;
    margin-left: auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 25px;
}
.gemini-message {
    background-color: #e4e6eb;
    color: #333;
    align-self: flex-start;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 25px;
}
/* Input styles */
#chat-form {
    display: flex;
    padding: 15px 20px;
    background-color: #f4f5f7;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
}
#prompt-input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 15px;
    outline: none;
    transition: 0.3s;
}
#prompt-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.3);
}
#send-button {
    margin-left: 10px;
    padding: 12px 20px;
    background-color: #c49b6a;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 15px;
```

```
    transition: 0.3s;
}
#send-button:hover:enabled {
    background-color: #a67c52;
}
#send-button:disabled {
    background-color: #c49b6a;
    cursor: not-allowed;
}
/* Loading indicator */
.loading-indicator {
    text-align: center;
    padding: 10px;
    color: #555;
    font-style: italic;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}
.chat-header {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align items to the
left */
    gap: 20px; /* space between back button and title
*/
    width: 90%;
    max-width: 700px;
    margin: 20px auto 0 auto;
}
.chat-header h1 {
    margin: 0;
    font-size: 28px;
    color: #333;
}
.back-button {
    padding: 8px 18px;
    background-color: #c49b6a;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}
.back-button:hover {
    background-color: #a67c52;
}
```

## **6. Add Images** 

Download the image file, `libraryimage.jpeg` , from <u>https://commons.wikimedia.org/wiki/File:Books_HD_%288314929977%29 .jpg</u> and upload it to the `public\images` folder. 

## • **Creating the .js Files for AI Service** 

Create the .js files containing the core logic for AI processing in the `services` folder. 

## **1. Create** **`tensorflowService.js`** 

Code Snippet 16 implements the core logic for the TensorFlow AI model. The code focuses solely on the computational tasks for generating book recommendations. 

**Code Snippet 16:** `tensorflowService.js` 

```
const tf = require("@tensorflow/tfjs");
const use = require("@tensorflow-models/universal-
sentence-encoder");
let model;
let cachedBooks = [];
let cachedEmbeddings;
async function initModel() {
  console.log("Loading Universal Sentence
Encoder...");
  model = await use.load();
  console.log("USE model loaded.");
}
async function initBookEmbeddings(books) {
  console.log("Generating book embeddings...");
  cachedBooks = books;
  const titles = cachedBooks.map((b) => b.title ||
"");
  cachedEmbeddings = await model.embed(titles);
  console.log("Book embeddings cached.");
}
async function getRecommendations(prompt) {
  if (!model || !cachedEmbeddings) return [];
  const userEmbedding = await model.embed([prompt]);
  const similarities = await
cosineSimilarity(userEmbedding, cachedEmbeddings);
  return cachedBooks
    .map((book, i) => ({
      title: book.title,
      authors: book.authors,
      bookString: `${book.title} by ${book.authors}`,
      score: similarities[i]
```

```
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
async function cosineSimilarity(a, b) {
  const a_norm = a.norm(2, 1, true);
  const b_norm = b.norm(2, 1, true);
  const dotProduct = b.matMul(a.transpose());
  const similarity =
dotProduct.div(b_norm.mul(a_norm));
  return similarity.squeeze().arraySync();
}
module.exports = {
  initModel,
  initBookEmbeddings,
  getRecommendations,
};
```

Code Snippet 16 begins by importing the required TensorFlow.js libraries. The `@tensorflow/tfjs` library provides the core functionality for creating tensors and performing computations, while `@tensorflow-models/universal-sentence-encoder` supplies a pretrained model for converting text into embeddings. Embeddings are numerical vectors that represent the meaning of text, enabling the application to compare book titles and user queries based on semantic similarity. 

The code then, defines the `initModel()` function to load the AI model, `initBookEmbeddings(books)` to generate and cache embeddings for book titles, and `getRecommendations(prompt)` to return book recommendations based on similarity. A helper function, `cosineSimilarity(a, b)` , is used to compute similarity scores between embeddings. Finally, the functions `initModel` , 

`initBookEmbeddings` , and `getRecommendations` are exported. 

Save the code with the file name `tensorflowService.js` in the `services` folder. 

## **2. Create** **`tensorflowWorker.js`** 

Code Snippet 17 shows the worker code that runs in a separate worker thread and handles all TensorFlow-related processing. This worker code acts as a background thread orchestrating and managing the execution of `tensorflowService` without blocking the main Node.js application. 

**Code Snippet 17** : `tensorflowWorker.js` 

```
const { parentPort } = require("worker_threads");
const tensorflowService =
require("./tensorflowService");
let modelReady = false;
let booksReady = false;
async function initializeModel() {
  await tensorflowService.initModel();
  modelReady = true;
}
parentPort.on("message", async (msg) => {
  if (msg.type === "loadBooks") {
    if (!modelReady) await initializeModel();
    await
tensorflowService.initBookEmbeddings(msg.books);
    booksReady = true;
    return;
  }
  if (msg.prompt) {
    const { prompt } = msg;
    try {
      if (!modelReady || !booksReady) {
        throw new Error("Worker not ready yet.");
      }
      const recommendations = await
tensorflowService.getRecommendations(prompt);
      parentPort.postMessage({
        prompt,
        payload: {
          response: recommendations.length
            ? "Here are some recommendations based on
your prompt."
            : `Sorry, no matching books were found for
"${prompt}".`,
          books: recommendations
        },
      });
    } catch (err) {
      parentPort.postMessage({ prompt, error:
err.message });
    }
  }
});
```

Code Snippet 17 uses the Node.js `worker_threads` module to run AIrelated tasks in a separate thread and communicate with the main 

application through `parentPort` . It imports the `tensorflowService` module and uses two flags, `modelReady` and `booksReady` , to track whether the AI model is loaded and book embeddings are prepared. The worker listens to messages from the main thread and performs tasks as follows: 

- When it receives a request to load books, it initializes the model if required and generates book embeddings 

- When it receives a user prompt, it generates book recommendations if the model and embeddings are ready 

The results or any errors are sent back to the main thread using 

structured messages. Save the code with the file name 

`tensorflowWorker.js` in the services folder. 

## • **Creating the** **`app.js` File** 

Finally, create the main Node.js application file, `app.js` . This file acts as the main entry point in the library application. In this file, the core logic of the application is handled. Routes and middleware are also defined. 

Consider the code in Code Snippet 18 for `app.js` file. 

## **Code Snippet 18** : `app.js` 

```
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const { Worker } = require("worker_threads");
const User = require("./model/User");
const Book = require("./model/Book");
const app = express();
const tensorflowWorker = new
Worker("./services/tensorflowWorker.js");
tensorflowWorker.on("error", (err) =>
console.error("TensorFlow Worker Error:", err));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false,
})
```

```
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username
});
      if (!user) return done(null, false, { message:
"Incorrect username." });
      if (user.password !== password) return done(null,
false, { message: "Incorrect password." });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
passport.serializeUser((user, done) => {
  if (user.isAdmin) return done(null, { _id: "admin" });
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  if (id && id._id === "admin") {
    return done(null, { username: "Admin", isAdmin: true
});
  }
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return
done(null, false);
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
app.get("/", (req, res) => res.render("home"));
app.get("/register", (req, res) =>
res.render("register"));
app.post("/register", async (req, res) => {
  try {
    await User.create({ username: req.body.username,
password: req.body.password });
    res.redirect("/login");
  } catch (err) {
    res.redirect("/register");
  }
});
app.get("/login", (req, res) => res.render("login"));
app.post("/login",(req, res, next) => {
```

```
  passport.authenticate("local", async (err, user, info)
=> {
    if (err || !user) {
      return res.redirect("/?error=Invalid credentials");
    }
    req.logIn(user, async (err) => {
      if (err) {
        return res.redirect("/?error=Login failed");
      }
      const books = await Book.find({}).limit(15);
      return res.render("booklist", { books });
    });
  })(req, res, next);
});
app.get("/logout", (req, res, next) => {
  req.logout((err) => (err ? next(err) :
res.redirect("/")));
});
app.get("/booklist", isLoggedIn, async (req, res) => {
  try {
    const books = await Book.find({}).limit(15);
    res.render("booklist", { books });
  } catch (err) {
    res.redirect("/");
  }
});
app.get("/admin", (req, res) => res.render("admin-
login"));
passport.use(
  "admin-local",
  new LocalStrategy((username, password, done) => {
    if (username === "Admin" && password === "12345") {
      return done(null, { username: "Admin", isAdmin: true
});
    }
    return done(null, false, { message: "Incorrect admin
credentials" });
  })
);
app.post(
  "/admin-login",
  passport.authenticate("admin-local", {
    successRedirect: "/admin-dashboard",
    failureRedirect: "/?error=Invalid admin credentials",
  })
);
app.get("/admin-dashboard", (req, res) => {
  if (req.isAuthenticated() && req.user.isAdmin) return
res.render("admin-dashboard");
  res.redirect("/admin");
});
```

```
app.post("/admin-dashboard/add-book", async (req, res) =>
{
  if (!req.isAuthenticated() || !req.user.isAdmin) return
res.redirect("/admin");
  try {
    await Book.create(req.body);
    res.redirect("/admin-dashboard");
  } catch (err) {
    res.redirect("/admin-dashboard");
  }
});
app.get("/tensorflow-chat", (req, res) =>
res.render("tensorflowChat"));
app.post("/tensorflow-chat", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error:
"Prompt required" });
  const onMessage = (workerResponse) => {
    if (workerResponse.prompt === prompt) {
      if (workerResponse.error) {
        res.status(500).json({ error: "Failed to get
TensorFlow response" });
      } else {
        res.json(workerResponse.payload);
      }
      tensorflowWorker.removeListener("message",
onMessage);
    }
  };
  tensorflowWorker.on("message", onMessage);
  tensorflowWorker.postMessage({ prompt });
});
function isLoggedIn(req, res, next) {
  return req.isAuthenticated() ? next() :
res.redirect("/login");
}
async function startServer() {
  try {
    await mongoose.connect(
"mongodb+srv://lindalarrissa91:linda91@cluster0.gktucwf.mo
ngodb.net/Library?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected successfully.");
    console.log("Loading limited books (300 max) to send
to TensorFlow worker...");
    const books = await Book.find({}).limit(300).lean();
    tensorflowWorker.postMessage({ type: "loadBooks",
books });
```

```
    console.log(`Sent ${books.length} books to TensorFlow
worker.`);
    app.listen(3000, "0.0.0.0", () => console.log("Server
started on port 3000"));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}
startServer();
```

Save the code with the file name `app.js` in the `library_application` folder. The code: 

- Imports Node.js packages such as `express` , `mongoose` , `passport` , `body-parser` , `passport-local` , `express-session` , and `worker_threads` and local models ( `User` , `Book` ). 

- Initializes Express, sets EJS as the view engine, and configures middleware for sessions, body parsing, and authentication. 

- Defines Passport strategies for member and admin login, with session management. 

- Sets up routes for home, member registration, login, logout, book listing, admin dashboard, and AI chat which processes user prompts using the worker thread. 



The worker limits loading to a maximum of 300 books to prevent memory overload and excessive processing time. This ensures stable performance while enabling AI-based recommendations in the development environment. 

- Connects to MongoDB and starts the server on port 3000. 

This completes the coding for the application. 

## **11.4 Loading External JSON Data into the Database** 

The current `booksforai` collection requires substantial data to provide the AI system sufficient context to analyse queries, identify patterns, and generate meaningful recommendations. A richer dataset allows the model to infer user intent more effectively and match queries with the most relevant books. 

For this purpose, this session uses an external JSON file named `book.json` , containing thousands of records, and loads it into the `booksforai` collection. Refer to Appendix C for a detailed description on loading this external JSON data to the `booksforai` collection. 



<!-- Start of picture text -->
€ © @ $% library-app-0829.onrender.com xy ® DIO:<br>) 4<br>«<br>Library Home<br>: =z =<br>—————— |<br><!-- End of picture text -->



<!-- Start of picture text -->
€ © A 3% fibrary-app-08z9.onrender.com/register Srey Ff OIO:<br>e<br>-<br>-<br>- Sign up form for Library Member<br>——— S /, y “a ———— / Return To Home Page<br>SS F — |<br><!-- End of picture text -->



<!-- Start of picture text -->
€ © @ (5% library-app-06z9.onrender.com * 8 DIO:<br>'<br>__ '<br>' Pa<br>=<br>Library Home<br>2 %<br><!-- End of picture text -->



<!-- Start of picture text -->
€ C A $s. library-app-0829.onrender.com/admin or ®F SIO:<br>7<br>\<br>Admin Login<br>oe Username Admin<br>— Password Pre<br>yz _—— Pa<br>aN Ze SS = 4 ReturnTo Home Page<br>SaaS==.5<br><!-- End of picture text -->



<!-- Start of picture text -->
€ C @ — &% [ibrary-app-0829.onrender.com/admin-dashboard ory *®F ODIO:<br>:<br>__ €¢ Book ID: 20000167<br>. Title: Atomic Habits<br>Authors: James Clear<br>y Pen Average Rating: 45<br>— Ratings Count: 200078<br>~ gy, 4 OZ= Text Reviews Count: 200987<br>> a fj ZAa — Publication Date: 0112/2025<br>—— SSN ———________#<br>_————————— : =| Publisher. James Publishers Ltd<br>— — —- =<br><!-- End of picture text -->



<!-- Start of picture text -->
€ © A 8% library-app-08z9.onrender.com * e® ODIO:<br>.<br>E<br>' - Fa<br>Me. | Library Home<br>= y<br>— = ee|<br>€ © A 3 library-app-08z9.onrender.com/login or YF ODIO:<br>|<br>7<br>| __ g<br>- Member Login<br>x ae Username Richard<br>—_—. &<br>" Password wove<br>SS - aN jay a ——— / ReturnTo Home Page<br>a o —— .<br><!-- End of picture text -->



<!-- Start of picture text -->
+ > CG A (SS W-applcstiononrandercom/ogin * YF OI1O:<br>List of Books<br>1 Harry Potter and the Half-Blood Prince (Harry Potter #6) JK. Rowling Mary GrandPré 457 Scholastic ine, 9116/2006<br>2 Harry Potter and the Order of the Phoenix (Harry Potter #5) 4K. Rowling Mary GrandPre 449 Scholastic inc. ay1/2004<br>4 Harry Pottor and the Chamber of Secrats (Haery Patter #2) JK. Rowling 442 Scholastic 41/1/2003,<br>5 Harry Potter and the Prisoner of Azkaban (Harry Potter #3) JK. Rowling Mary GrandPré 46 Scholastic inc. si1/2004<br>a Harry Pottor Boxed Set Books 1-5 (Marry Patter #1-5) JK, Rowling Mary GrandPré 478 Scholastic 9/13/2004<br>a Unauthorized Harry Potter Book Sevan News: “Half-Blood Pinca” Analysis and Speculation W. Fredenck Zimmerman ar Nimble Books 4/26/2005<br>10 Harry Potlor Collection (Masry Potter #1-6) JK. Rowling 473 Scholastic 9/12/2005<br>12 The Ultimate Hitchhiker's Guide: Free Complete Novels and One Story (Hitchhiker's Guide to the Galaxy 1.5) Douglas Adams 438 ‘Gramercy Books 19/1/2005<br>13 The Ultimate Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galery #1-5) Douglas Adams 438 Del Rey Books 4/90/2002<br>4 The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy #1) Douglas Adams 42 Crown 8/3/2004<br>16 The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy #1) Douglas Adams/Stephen Fry 422 Random House Ausio 3923/2005<br>18 Tha Ultimate Hitchhiker's Guide (Hitchhiker's Guide to the Galaxy #1-5) Douglas Adams 438 Wings Books 1171996<br>21 AShodt History of Nearly Everything Bil Beyson 421 Broadway Books 14/2004<br>22 Bill Bryson’s African Diary Bil Bryson 344 Broadway Books 1213/2002<br>23 Bryson's Dictionary of Troublesome Words: A Vititer's Guide to Gating Mt Right Bil Bryson 387 Brosdway Books 14/2004<br>Logout<br><!-- End of picture text -->



<!-- Start of picture text -->
€ C@ A 2 library-app-0829.onrender.com/tensorflow-chat Qe #8 SIO:<br>Tensor Flow Chat<br>How can | help you today?<br>Books related to computer technology<br>Here are some recommendations based on your prompt.<br>= Motorcycle Basics Techbook by John Harold Haynes « Active Literacy<br>Across the Curriculum: Strategies for Reading Writing Speaking and<br>Listening by Heidi Hayes Jacobs * eBay Business All-in-One Desk<br>Reference for Dummies by Marsha Collier « Ruby Cookbook by Lucas<br>Carlson/Leonard Richardson » Hatchet Jobs: Writings on<br>Contemporary Fiction by Dale Peck<br><!-- End of picture text -->



<!-- Start of picture text -->
© > G AB  % Ib-spplcstiononrendercom/logn e* ® O10:<br>List of Books<br>1 Harty Potier and the Half-Blood Prince (Harry Potter #6) J.K. Rowling’Mary GrandPré 457 ‘Scholastic Inc. 9/16/2005<br>2 Harry Potter and the Order of the Phoenix (Harry Potter #5) JK. Rowling/Mary GrandPré 4.49 Scholastic Inc. 91/2004<br>4 Harty Potler and the Chamber of Secrets (Harry Potter #2) JK. Rowling 442 ‘Scholastic 11/1/2003<br>5 Harry Potter and the Prisoner ofAzkaban (Harry Potter #3) JK. Rowling/Mary GrandPré 4.56 ‘Scholastic Inc. 5i1/2004<br>8 Harty Potier Boxed Set Books 1-5 (Hay Potter #1-5) JK. Rowling’Mary GrandPré 478 ‘Scholastic 9/13/2004<br>9 Unauthorized Harry Potter Book Seven News: “Half-Blood Prince Analysis and Speculation W. Frederick Zimmerman 374 Nimble Books 4126/2005<br>10 Harry Potler Collection (Harry Potter #1-6) JK. Rowling 473 Scholastic 9/12/2005<br>12 The Ultimate Hitchhiker's Guide: Five Complete Novels and One Story (Hitchhiker's Guideto the Galaxy #1-5) Douglas Adams 438 Gramercy Books 19/1/2005<br>13 The Ultimate Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy #1-5) Douglas Adams 438 Det Rey Books 4/302002<br>14 The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy #1) Douglas Adams 422 Crown 9/3/2004<br>16 The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy #1) Douglas Adams/Stephen Fry 422 Random House Audio 242005<br>18 The Uttimate Hitchhiker's Guide (Hitchhiker's Guide to the Galaxy #1-5) Douglas Adams 438 Wings Books 1117/1998<br>241 A Short History of Nearly Everything Bill Bryson 424 Broadway Books 9114/2004<br>22 Bill Bryson’s African Diary Bill Bryson 344 Broadway Books 12/3/2002<br>23 Bryson's Dictionary of Troublesome Words: A Viriter's Guide to Getting It Right Bill Bryson 387 Broadway Books 9/14/2004<br>(SSS)<br><!-- End of picture text -->

