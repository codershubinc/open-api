import { Router } from 'express'; 
import AddressRoutes from './address/address.routes.js';
import ContryRoute from './contry/contry.routes.js'
import UserRoutes from './user/user.routes.js'
import saavnCDNRoutes from './saavnCDN/saavnCDN.routes.js'
import gitHubRoutes from './gitHub/github.routes.js'

const router = Router();

router.use('/contry' , ContryRoute)
router.use('/address', AddressRoutes)
router.use('/user' , UserRoutes )
router.use('/saavnCDN' , saavnCDNRoutes)
router.use('/github' , gitHubRoutes)

export default router;
