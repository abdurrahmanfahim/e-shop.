import { Router } from 'express';
import { placeOrder, getMyOrders, getOrder, getAllOrders, updateOrderStatus } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = Router();

router.use(auth);
router.post('/', placeOrder);
router.get('/', getMyOrders);
router.get('/:id', getOrder);
router.get('/admin/all', admin, getAllOrders);
router.put('/admin/:id', admin, updateOrderStatus);

export default router;
