const express=require('express');
require('dotenv').config();
const connection=require('../connection');
const router= express.Router();


router.post('/fullimmunization',(req,res)=>{
    let data=req.body;
    let query='insert into full_immunization(district,lyear,tyear)values(?,?,?)';
    connection.query(query,[data.district,data.lastyear,data.thisyear],(err,result)=>{
        if(!err){
            return res.json({message:'successful inserted'});
        }else{
            return res.json(err);
        }
    })
})

router.post('/dorvd',(req,res)=>{
    let data=req.body;
    let query='insert into drivd(district,lyear,tyear)values(?,?,?)';
    connection.query(query,[data.district,data.lastyear,data.thisyear],(err,result)=>{
        if(!err){
            return res.json({message:'successful inserted'});
        }else{
            return res.json(err);
        }
    })
})

router.post('/atovp',(req,res)=>{
    let data=req.body;
    let query='insert into aovp(district,lyear,tyear)values(?,?,?)';
    connection.query(query,[data.district,data.lastyear,data.thisyear],(err,result)=>{
        if(!err){
            return res.json({message:'successful inserted'});
        }else{
            return res.json(err);
        }
    })
})



router.post('/nvbdcp',(req,res)=>{
    let data=req.body;
    let query='insert into nvbdcp(district,tabsrdt,irspc,Dcase,mmdpsflc,mms,hs)values(?,?,?,?,?,?,?)';
    connection.query(query,[data.district,data.tabsrdt,data.irspc,data.Dcase,data.mmdpsflc,data.mms,data.hs],(err,result)=>{
        if(!err){
            return res.json({message:'successful inserted'});
        }else{
            return res.json(err);
        }
    })
})


router.post('/aesje',(req,res)=>{
    let data=req.body;
    let query='insert into nvbdcp(district,laescase,ljecase,ldeath,taescase,tjecase,tdeath)values(?,?,?,?,?,?,?)';
    connection.query(query,[data.district,data.laescase,data.ljecase,data.ldeath,data.taescase,data.tjecase,data.tdeath],(err,result)=>{
        if(!err){
            return res.json({message:'successful inserted'});
        }else{
            return res.json(err);
        }
    })
})

















module.exports= router