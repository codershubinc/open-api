import { Router } from "express";
import { fromLink } from "../../../../controllers/api/v1.0/saavnCDN/saavnCDN.controller.js";


const router = Router();

router.route('/').get(fromLink)


export default router