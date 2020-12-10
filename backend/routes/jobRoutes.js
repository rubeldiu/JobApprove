import express from 'express'
const router =express.Router();
import { registerJob,getAllJobs} from '../controllers/jobController.js'


router.route('/').post(registerJob);
router.route('/all').get(getAllJobs);


export default router