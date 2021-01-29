const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    branch:String,
    sem:Number
})
module.exports=mongoose.model("Student",schema);
