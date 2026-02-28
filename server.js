// 1. Unlock the vault: This line immediately reads your .env file
require('dotenv').config();

// 2. Import the tools (similar to 'import' in Java/Python)
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// 3. Create the actual server application
const app = express();
// 4. The Bouncer: Allows your Chrome extension to bypass browser security rules
app.use(cors());

// 5. The Translator: Converts incoming web data into clean JavaScript objects (JSON)
app.use(express.json());

// 6. Log into Google: We pass the hidden key from our .env file into the SDK
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// 7. When the extension sends a POST request here, run this async function:
app.post('/api/generate', async (req, res) => {
    try {
        // Grab the 'prompt' text that the extension sent us
        const promptText = req.body.prompt;

        // Pick the AI model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
       
        // Send the prompt to Google and wait for the response
        const result = await model.generateContent(promptText);
        const aiResponse = result.response.text();

        // Package the AI's text and send it BACK to the Chrome extension
        res.json({ success: true, text: aiResponse });

    } catch (error) {
        // If Google's servers crash or the key is wrong, tell the extension
        console.error("Backend Error:", error);
        res.status(500).json({ error: "Failed to communicate with AI" });
    }
});
// 8. Grab the port number from the .env file (3000)
const PORT = process.env.PORT || 3000;

// 9. Turn on the server!
app.listen(PORT, () => {
    console.log(`🚀 PrepNova Backend is live on http://localhost:${PORT}`);
});