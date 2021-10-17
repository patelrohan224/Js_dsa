const express=require('express');
const router=express.Router();
const {body,validationResult} = require('express-validator');
const User= require('../models/user.model')

router.post("/", 
body("gender").custom(value=>{
   if(value=="Male" || value=="Female" || value=="female"||value=="male" ||value=="FEMALE"||value=="MALE" || value=="others" ||value=="Others")
   {
      return true
   }
   else
   { 
      throw new Error('enter option male or female')
   }
}),
body("first_name").isLength({min:1}).withMessage("first_name is required"),
body("last_name").isLength({min:1}).withMessage("last_name is required"),
body("email").isEmail().withMessage("please enter valid email"),
// body("gender").isLength({min:3}).withMessage("gender is required"),
body("pincode").isLength({min:6,max:6}).withMessage("pincode should be 6 length"),
body("age").custom(value=>{
   if(value>=1 && value<=100)
   {
      return true
   }
   else
   { 
      throw new Error('Please enter from 1 to 100')
   }
}),

async(req, res)=>{
   const errors = validationResult(req);
    let finalErrors = null;
    if (!errors.isEmpty()) {
        finalErrors = errors.array().map(error => {
            return {
                param: error.param,
                msg: error.msg,
            }
        })
      return res.status(400).json({ errors:finalErrors });
   }

    try{
       const user=await User.create(req.body);
      return res.status(201).send({user})
    }
      catch(err){return res.status(400).send({err:err.message})}   
})

// router.patch("/:id",
// body("author").custom(async(value,{req}) =>{
//    const user=await Author.findById(req.params.id).lean().exec()
//    if(user.author!==value)throw new Error("this person cannt not edit");
//    return true; 
// }),
// async function(req,res){
//    const errors=validationResult(req);
//    if(!errors.isEmpty()){
//       finalErrors=errors.array().map(err =>{
//          return{
//             param:errors.param,
//             msg:errors.msg
//          }
//       })
//       return  res.status(400).json({data:errors.array()});
//    }
// }
// )

module.exports=router;