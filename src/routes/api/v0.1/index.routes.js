import { Router } from 'express';
import RandomUserRoutes from './randomUser/randomUser.router.js';
import RandomImageRoutes from './randomImages/randomImage.routes.js';

const router = Router();

router.use('/random_user', RandomUserRoutes);
router.use('/random_image', RandomImageRoutes);

export default router;
