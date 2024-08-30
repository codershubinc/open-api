import { Router } from 'express'
import { email, hash } from '../../../../controllers/api/v1.0/gravatar/gravatar.controller.js';



const router = Router();


router.route('/email').get(email)
router.route('/hash').get(email)



export default router