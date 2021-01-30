const express=require('express');
const student = require('./model/student');
const Student=require('./model/student');
const router=express.Router();

router.get("/students",async (req,res)=>{
    const student=await Student.find();
    res.send(student);
});

router.post("/students",async(req,res)=>{
    const student=new Student({
        name:req.body.name,
        branch:req.body.branch,
        sem:req.body.sem
    });
    await student.save();
    res.send(student); 
});

router.delete("/students/:id",async(req,res)=>{
    await Student.deleteOne({_id:req.params.id});
    res.send("deleted");
});

router.patch("/students/:id", async (req, res) => {

    try {

        const student = await Student.findOne({ _id: req.params.id });
        student.name=req.body.name;
        student.branch=req.body.branch;
        student.sem=req.body.sem;

        await student.save();

        res.send(student);

    } catch {

        res.status(404)

        res.send({ error: "doesn't exist!" });

    }

});

module.exports=router;


