import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { readPdfText } from 'pdf-text-reader';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Get absolute path to PDF
const __dirname = path.resolve();
const pdfPath = path.join(__dirname, 'David_Harvith_CV.pdf');

// Read PDF file on startup
let resumeText = '';
try {
    const pdfBuffer = readFileSync(pdfPath);
    const uint8Array = new Uint8Array(pdfBuffer);
    resumeText = await readPdfText({ data: uint8Array });
    console.log('✅ Resume text loaded successfully');
} catch (err) {
    console.error('❌ Failed to read PDF:', err);
    process.exit(1);
}

// CORS Configuration
const allowedOrigins = [
    'http://localhost:5173',
    'https://portfolio-np1q-op1jnimo8-davidharviths-projects.vercel.app',
    'https://portfolio-tan-three-14.vercel.app',
    'https://david-harvith.com',
    'https://www.david-harvith.com',
    'https://www.david-harvith.com/#chatbox',
    'https://portfolio-production-8ba1.up.railway.app'
  ];

const allowedPatterns = [
  /\.vercel\.app$/,
  /\.railway\.app$/
];

const corsOptionsDelegate = (req, callback) => {
  const origin = req.header('Origin');
  const isAllowed =
    allowedOrigins.includes(origin) ||
    allowedPatterns.some(pattern => pattern.test(origin));
  callback(null, {
    origin: isAllowed,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  });
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.options('*all', cors(corsOptionsDelegate));


// API endpoint
app.post('/api/ask', async (req, res) => {
    const { question } = req.body;

    const systemPrompt = `
    You are David Harvith's virtual assistant. Answer questions naturally as if you were David himself.
    Use this resume information:
    ${resumeText}

    Guidelines:
    - Be concise (2-4 sentences)
    - Use bullet points when appropriate
    - Maintain a friendly, professional tone
    - If unsure, give a best-effort answer
    - Never mention being an AI or chatbot`;

    try {
        const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            {
                model: "llama3-70b-8192",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: question }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        
        res.json({ answer: response.data.choices[0].message.content });
    } catch (err) {
        console.error('API Error:', err.response?.data || err.message);
        res.status(500).json({ answer: "Sorry, I'm having trouble connecting to the AI service." });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
