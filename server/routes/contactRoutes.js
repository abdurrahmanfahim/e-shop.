import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import validate from '../middleware/validate.js';
import { contactSchema } from '../utils/schemas.js';

const router = Router();

router.post('/', validate(contactSchema), submitContact);

export default router;
