import { Router } from 'express';
import { placeOrder, getMyOrders, getOrder, getAllOrders, updateOrderStatus } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import validate from '../middleware/validate.js';
import { orderSchema } from '../utils/schemas.js';

const router = Router();

router.use(auth);

// admin routes first — must be before /:id to avoid conflict
router.get('/admin/all', admin, getAllOrders);
router.put('/admin/:id', admin, updateOrderStatus);

router.post('/', validate(orderSchema), placeOrder);
router.get('/', getMyOrders);
router.get('/:id', getOrder);

export default router;
