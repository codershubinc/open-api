import { Router } from 'express'; 
import AddressRoutes from './address/address.routes.js';
import ContryRoute from './contry/contry.routes.js'
import UserRoutes from './user/user.routes.js'

const router = Router();

router.use('/contry' , ContryRoute)
router.use('/address', AddressRoutes)
router.use('/user' , UserRoutes )
export default router;
