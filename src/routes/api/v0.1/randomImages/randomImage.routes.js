import { Router } from "express";
import {
    RandomImageGanarator,
    RandomImageGanaratorQuery,
    RandomImageGanaratorTypeQuery
} from  '../../../../controllers/api/v0.1/randomImage/randomImages.controller.js'

const router = Router();

router.route("/").get(RandomImageGanarator)
router.route("/auto").get(RandomImageGanarator)
router.route("/img/:query").get(RandomImageGanaratorQuery)
router.route("/t/:avatarStyle/:query/:imageType").get(RandomImageGanaratorTypeQuery)


export default router