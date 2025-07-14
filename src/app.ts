import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import goldPriceRoutes from './routes/goldPriceRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/goldPrice', goldPriceRoutes);
app.use('/api/auth', authRoutes);
export default app; 