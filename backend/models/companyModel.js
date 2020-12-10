import mongoose from 'mongoose'



const companySchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    logo_img_url:{
        type:String
    },
    cvr:{
        type:String
    }

},{
    timestamps:true
})
const Company =mongoose.model('Company',companySchema)
export default Company