import express from 'express';
import siteController from '../../controllers/siteController.js';

const router = express.Router();

router.get('/', siteController.getHomePage);

export default router;