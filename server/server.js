import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';


connectDB();

const app = express();

app.use(helmet());
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:5174',
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) cb(null, true);
    else cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
// CSRF note: This API uses JWT Bearer tokens (stateless), not cookies.
// CSRF attacks require cookie-based sessions, so no CSRF middleware is needed.
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/coupon', couponRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
