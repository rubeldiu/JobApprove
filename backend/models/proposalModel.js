import mongoose from 'mongoose'
const proposalSchema = mongoose.Schema({
    job_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Job'
    },
    company_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Company'
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    },


},{
    timestamps:true
})
const Proposal =mongoose.model('Proposal',proposalSchema)
export default Proposal