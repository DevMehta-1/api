const express=require('express');
const Stud=require('./model/stud');
const router=express.Router();

router.get("/students",async (req,res)=>{
    const stud=await Stud.find();
    res.send(stud);
});
module.exports=router;

