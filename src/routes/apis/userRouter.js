import express from 'express';
import userController from '../../controllers/userController.js';

const router = express.Router();


router.post('/register', userController.createUserAPI);
router.post('/login', userController.handleLoginAPI);
router.get('users', userController.getUsersAPI);

export default router;