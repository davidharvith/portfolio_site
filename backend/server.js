import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { readPdfText } from 'pdf-text-reader';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

// Initialize environment variables
dotenv.config();
console.log("✅ Using API Key:", process.env.GROQ_API_KEY?.slice(0, 6), '...'); 

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Get absolute path to PDF
const __dirname = path.resolve();
const pdfPath = path.join(__dirname, 'DavidHarvithCV.pdf');

// Read and process PDF file
let resumeText = '';
try {
    const pdfBuffer = readFileSync(pdfPath);
    const uint8Array = new Uint8Array(pdfBuffer);
    resumeText = await readPdfText({ data: uint8Array });
    console.log('✅ Resume text loaded successfully');
    
    // Truncate text to prevent oversized prompts
    resumeText = resumeText.substring(0, 15000);
} catch (err) {
    console.error('❌ Failed to read PDF:', err);
    process.exit(1);
}

// CORS Configuration
const allowedOrigins = [
    'http://localhost:5173',
    'https://www.david-harvith.com',
    'https://david-harvith.com',
    'https://portfolio-production-8ba1.up.railway.app'
];

const allowedPatterns = [
    /^https:\/\/portfolio-.*\.vercel\.app$/,
    /\.railway\.app$/
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        
        const isAllowed = allowedOrigins.includes(origin) ||
            allowedPatterns.some(pattern => pattern.test(origin));

        callback(null, isAllowed);
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Apply middleware
app.use(cors(corsOptions));
app.use(express.json());

// API endpoint
app.post('/api/ask', async (req, res) => {
    const { question } = req.body;

    if (!question?.trim()) {
        return res.status(400).json({ answer: "Please provide a valid question" });
    }

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
                ],
                temperature: 0.5,
                max_tokens: 500
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                timeout: 10000
            }
        );
        
        res.json({ answer: response.data.choices[0].message.content });
    } catch (err) {
        console.error('API Error:', {
            status: err.response?.status,
            data: err.response?.data,
            message: err.message
        });
        
        const errorMessage = err.response?.data?.error?.message || 
                            "I'm experiencing technical difficulties. Please try again later.";
        res.status(500).json({ answer: errorMessage });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        resumeLoaded: resumeText.length > 0 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
