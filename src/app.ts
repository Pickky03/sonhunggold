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

//configure cors
app.use(cors({
  origin: true, // cho phép frontend kết nối
  credentials: true,
}));
app.use((req, res, next) => {
  console.log(`📦 [GLOBAL LOGGER] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/goldPrice', goldPriceRoutes);
app.use('/api/auth', authRoutes);
export default app; 