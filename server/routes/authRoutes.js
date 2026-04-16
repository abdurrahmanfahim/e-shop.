import { Router } from 'express';
import { register, login, getMe, updateProfile, updatePassword } from '../controllers/authController.js';
import auth from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import rateLimit from 'express-rate-limit';
import { registerSchema, loginSchema } from '../utils/schemas.js';

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: 'Too many login attempts' });
const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', loginLimiter, validate(loginSchema), login);
router.get('/me', auth, getMe);
router.put('/profile', auth, updateProfile);
router.put('/password', auth, updatePassword);

export default router;
