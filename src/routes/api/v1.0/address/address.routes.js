import { Router } from "express"; 
import {code , random} from "../../../../controllers/api/v1.0/address/address.controllere.js"
const router = Router();

router.route('/:contryCode').get(code)
router.route('/').get(code)
router.route('/random').get(random)
export default router