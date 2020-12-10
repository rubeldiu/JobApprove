
import Job from '../models/jobModel.js'
import asyncHandler from 'express-async-handler'




//@desc Register a new Job
//@route Post /api/jobs
//@access Public
const registerJob = asyncHandler( async(req,res)=>{
    const {title,description,price,due_time}=  req.body
     const jobExists = await Job.findOne({title})
     
     if(jobExists){
         res.status(400)
         throw new Error('This job is already exists');
     }

     const job = await Job.create({
        title, 
        description,
        price,
        due_time
     })

     if(job){
         res.status(201).json({
            title:job.title,
            description:job.description,
            price:job.price,
            due_time:job.due_time

         })

     } else {
         res.status(400)
         throw new Error('Invalid data')

     }

})


//@desc Get all jobs
//@route GET /api/jobs/all
//@access  
const getAllJobs = asyncHandler( async(req,res)=>{
    const jobs = await Job.find();

    if(jobs){
        res.json({
            jobs
        })

    }else{
        res.status(404)
        throw new Error('Error occured!!')
    }

})



export {registerJob,getAllJobs}