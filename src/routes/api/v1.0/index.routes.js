import { Router } from 'express'; 
import AddressRoutes from './address/address.routes.js';
import ContryRoute from './contry/contry.routes.js'

const router = Router();

router.use('/contry' , ContryRoute)
router.use('/address', AddressRoutes)
export default router;
