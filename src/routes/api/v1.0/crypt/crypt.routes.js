import { Router } from "express";
import { cryptStr as encrypt, decryptStr as decrypt } from "../../../../controllers/api/v1.0/crypto/crypto.controller.js"

const router = Router();

router.route('/c').post(encrypt)
router.route('/d').post(decrypt)
router.route('/c').get(encrypt)
router.route('/d').get(decrypt)

export default router