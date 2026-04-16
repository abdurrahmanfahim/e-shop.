import cors from 'cors';
import dns from 'dns';
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

// Set DNS server to 1.1.1.1 (Cloudflare)
dns.setServers(['1.1.1.1', '1.0.0.1']);

connectDB();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
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
