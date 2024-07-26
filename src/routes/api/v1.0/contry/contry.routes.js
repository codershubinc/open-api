import { Router } from "express";
import { code, random, special } from "../../../../controllers/api/v1.0/contryInfo/contry.controller.js"
const router = Router();

router.route('/:contryCode').get(code)
router.route('/:contryCode/:type').get(special)
router.route('/').get(code)
router.route('/random').get(random)
export default router