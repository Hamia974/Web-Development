// server.js (inside backend folder)

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

// ✅ load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ initialize OpenAI with API key from .env
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Route for Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // ✅ call OpenAI
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error with OpenAI:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
