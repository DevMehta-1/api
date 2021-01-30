const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const route=require('./route');

mongoose.connect("mongodb+srv://Dev:Devahir012016@cluster0.pctfg.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app=express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT||3000,()=>{
            console.log("server started");
        })
    }
);