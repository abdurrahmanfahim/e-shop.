import { Router } from 'express';
import { getDashboard, getUsers, deleteUser, updateUserRole, getContacts } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = Router();

router.use(auth, admin);

router.get('/dashboard', getDashboard);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id/role', updateUserRole);
router.get('/contacts', getContacts);

export default router;
