import { Router } from 'express';
import { getCart, addItem, updateItem, removeItem, clearCart } from '../controllers/cartController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.use(auth);
router.get('/', getCart);
router.post('/', addItem);
router.put('/:itemId', updateItem);
router.delete('/:itemId', removeItem);
router.delete('/', clearCart);

export default router;
