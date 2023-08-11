const express=require('express');
require('dotenv').config();
const connection=require('../connection');
const router= express.Router();



router.post('/fullimmunization',(req,res)=>{
    let data=req.body;
    let query='select * from full_immunization where district=?';
    connection.query(query,[data.district],(err,result)=>{
        if(!err){
            if(result.length > 0 ){
                return res.json(result);
            }
            else{
                return res.json({message:'No Data Match'})
            }
        }else{
            return res.json(err);
        }
    })
})

router.post('/dorvd',(req,res)=>{
    let data=req.body;
    let query='select * from drivd where district=?';
    connection.query(query,[data.district],(err,result)=>{
        if(!err){
            if(result.length > 0 ){
                return res.json(result);
            }
            else{
                return res.json({message:'No Data Match'})
            }
        }else{
            return res.json(err);
        }
    })
})

router.post('/nvbdcp',(req,res)=>{
    let data=req.body;
    let query='select * from nvbdcp where district=?';
    connection.query(query,[data.district],(err,result)=>{
        if(!err){
            if(result.length > 0 ){
                return res.json(result);
            }
            else{
                return res.json({message:'No Data Match'})
            }
        }else{
            return res.json(err);
        }
    })
})

router.post('/aesje',(req,res)=>{
    let data=req.body;
    let query='select * from aesje where district=?';
    connection.query(query,[data.district],(err,result)=>{
        if(!err){
            if(result.length > 0 ){
                return res.json(result);
            }
            else{
                return res.json({message:'No Data Match'})
            }
        }else{
            return res.json(err);
        }
    })
})

router.post('/atovp',(req,res)=>{
    let data=req.body;
    let query='select * from aovp where district=?';
    connection.query(query,[data.district],(err,result)=>{
        if(!err){
            if(result.length > 0 ){
                return res.json(result);
            }
            else{
                return res.json({message:'No Data Match'})
            }
        }else{
            return res.json(err);
        }
    })
})







module.exports=router;