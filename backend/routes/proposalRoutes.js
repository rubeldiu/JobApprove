import express from 'express'
const router =express.Router();
import {protect} from '../middleware/authMiddleware.js'
import { registerProposal,getjobsWithProposal,updateStatus,statusRejected, getjobsWithApproved,getjobsWithRejected} from '../controllers/proposalController.js'


router.route('/').post(registerProposal);
router.route('/allWithStatus').get(protect,getjobsWithProposal);
router.route('/alljobsWithApproved').get(protect,getjobsWithApproved);
router.route('/alljobsWithRejected').get(protect,getjobsWithRejected);
router.route('/updateStatus/:id').get(protect,updateStatus);
router.route('/statusRejected/:id').get(protect,statusRejected);


export default router