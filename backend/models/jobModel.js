import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
       type:Number
    },
    due_time:{
        type:Date
    },
    
},{
    timestamps:true
})
const Job =mongoose.model('Job',jobSchema)
export default Job