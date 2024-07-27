import { Router } from 'express';  
import { random, user } from '../../../../controllers/api/v1.0/user/user.controller.js';

const router = Router();
 

router.route('/').get(random)
router.route('/:contryCode').get(user)
export default router;
