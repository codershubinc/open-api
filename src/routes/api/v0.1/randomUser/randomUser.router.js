import { Router } from "express";
import {
    RandomUserGanarator,
    RandomUserGeneratorError,
    RandomBigUserGanarator,
    RandomBig0UserGanarator
} from '../../../../controllers/api/v0.1/randomUser/randomUser.controller.js'
const router = Router();

router.route("/:any/:query").get(RandomUserGeneratorError)
router.route("/").get(RandomUserGanarator)
router.route("/big").get(RandomBigUserGanarator)
router.route("/big0").get(RandomBig0UserGanarator)



export default router