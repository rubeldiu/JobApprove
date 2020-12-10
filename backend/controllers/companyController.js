
import Company from '../models/companyModel.js'
import asyncHandler from 'express-async-handler'




//@desc Register a new company
//@route Post /api/companies
//@access Public
const registerCompany = asyncHandler( async(req,res)=>{
    const {user_id,name,logo_img_url,cvr}=  req.body
     const companyExists = await Company.findOne({name})
     
     if(companyExists){
         res.status(400)
         throw new Error('Company name  already exists');
     }

     const company = await Company.create({
        user_id, 
        name,
        logo_img_url,
        cvr
     })

     if(company){
         res.status(201).json({
            _id:company._id,
            user_id:company.user_id,
            name:company.name,
            logo_img_url:company.logo_img_url,
            cvr:company.cvr

         })

     } else {
         res.status(400)
         throw new Error('Invalid company data')

     }

})

export {registerCompany}