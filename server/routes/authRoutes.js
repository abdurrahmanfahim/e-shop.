import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import auth from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import rateLimit from 'express-rate-limit';
import { registerSchema, loginSchema } from '../utils/schemas.js';

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: 'Too many login attempts' });
const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', loginLimiter, validate(loginSchema), login);
router.get('/me', auth, getMe);

export default router;
