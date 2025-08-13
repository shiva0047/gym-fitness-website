import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import errorHandler from './middleware/error.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';


// Load env vars
dotenv.config();

// Connect to database
await connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "https://gym-fitness00.netlify.app", // Allow all origins for development
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true, 
  }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;