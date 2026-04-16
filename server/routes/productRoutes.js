import { Router } from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, addReview } from '../controllers/productController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', auth, admin, createProduct);
router.put('/:id', auth, admin, updateProduct);
router.delete('/:id', auth, admin, deleteProduct);
router.post('/:id/reviews', auth, addReview);

export default router;
