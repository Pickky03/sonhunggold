import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import goldPriceRoutes from './routes/goldPriceRoutes';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'https://sonhunggold-frontend.vercel.app', // thêm frontend thật nếu deploy
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/goldPrice', goldPriceRoutes);
app.use('/api/auth', authRoutes);
export default app; 