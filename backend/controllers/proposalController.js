
import Proposal from '../models/proposalModel.js'
import asyncHandler from 'express-async-handler'


//@desc Register a new Proposal
//@route Post /api/proposal
//@access Public
const registerProposal = asyncHandler( async(req,res)=>{
    const {job_id,company_id,description,status}=  req.body
    

     const proposal = await Proposal.create({
        job_id, 
        company_id,
        description,
        status
     })

     if(proposal){
         res.status(201).json({
            job_id:proposal.job_id,
            company_id:proposal.company_id,
            description:proposal.description,
            status:proposal.status

         })

     } else {
         res.status(400)
         throw new Error('Invalid data')

     }

})


//@desc Get all jobs with proposal
//@route GET /api/proposal/alljobsWithProposal
//@access  
const getjobsWithProposal = asyncHandler( async(req,res)=>{
    const jobs = await Proposal.find()
                .where('status').equals('pending')
                .select('_id status')
                .populate('job_id','title description price')
                .populate('company_id','name')

    if(jobs){
        res.json({
            jobs
        })

    }else{
        res.status(404)
        throw new Error('Error occured!!')
    }

})


//@desc Get all jobs with Approved
//@route GET /api/proposal/alljobsWithApproved
//@access  
const getjobsWithApproved = asyncHandler( async(req,res)=>{
    const jobs = await Proposal.find()
                .where('status').equals('accepted')
                .select('_id status')
                .populate('job_id','title description price')
                .populate('company_id','name')

    if(jobs){
        res.json({
            jobs
        })

    }else{
        res.status(404)
        throw new Error('Error occured!!')
    }

})

//@desc Get all jobs with Rejected
//@route GET /api/proposal/alljobsWithRejected
//@access  
const getjobsWithRejected = asyncHandler( async(req,res)=>{
    const jobs = await Proposal.find()
                .where('status').equals('rejected')
                .select('_id status')
                .populate('job_id','title description price')
                .populate('company_id','name')

    if(jobs){
        res.json({
            jobs
        })

    }else{
        res.status(404)
        throw new Error('Error occured!!')
    }

})


//@desc  update status accepted
//@route GET http://localhost:5000/api/proposal/updateStatus/5fce88ac2903f1296a6674e4
//@access  
const updateStatus = asyncHandler( async(req,res)=>{
    
    const proposal = await Proposal.findById(req.params.id)
                

    if(proposal){
        proposal.status='accepted'
        const updateProposal = await proposal.save();
        res.json(updateProposal)

    }else{
        res.status(404)
        throw new Error('Error occured!!')
    }

})


//@desc  update status rejected
//@route GET http://localhost:5000/api/proposal/statusRejected/5fce88ac2903f1296a6674e4
//@access  
const statusRejected = asyncHandler( async(req,res)=>{
    
    const proposal = await Proposal.findById(req.params.id)
                

    if(proposal){
        proposal.status='rejected'
        const updateProposal = await proposal.save();
        res.json(updateProposal)

    }else{
        res.status(404)
        throw new Error('Error occured!!')
    }

})



export {registerProposal,getjobsWithProposal,updateStatus,statusRejected,getjobsWithApproved,getjobsWithRejected}