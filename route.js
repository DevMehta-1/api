const express=require('express');
const Student=require('./model/student');
const router=express.Router();

router.get("/students",async (req,res)=>{
    const student=await Student.find();
    res.send(student);
});
module.exports=router;

