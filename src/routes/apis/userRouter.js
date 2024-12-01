import express from 'express';
import userController from '../../controllers/userController.js';

const router = express.Router();


router.get('/', userController.getUserAPI);
router.post('/register', userController.createUserAPI);

export default router;