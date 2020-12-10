import express from 'express'
const router =express.Router();
import { registerCompany} from '../controllers/companyController.js'


router.route('/').post(registerCompany);

export default router