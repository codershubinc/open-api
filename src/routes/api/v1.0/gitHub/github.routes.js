import {Router} from 'express'
import { user , random , avatarRandom } from '../../../../controllers/api/v1.0/gitHub/getUser.controller.js'


const router = Router();


router.route('/user').get(user)
router.route('/user/random').get(random)
router.route('/avatar/random').get(avatarRandom)



export default router