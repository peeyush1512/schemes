const express = require('express');
const connection=require('../connection');
const router = express.Router();


 

router.get('/profile/:id',(req,res)=>{
    let id=req.params.id;
    let query="select name from registration where id=?;";
    connection.query(query,[id],(err,result)=>{
        if(!err){
            if(result.length > 0){
                return res.json(result);
            }else{
                return res.json({message:"id is invalid"});
            }
        }
        else{
            return res.json(err)
        }
    })
})
router.get('/district/:id',(req,res)=>{
    let id=req.params.id;
    let query="select distname from registration where id=?;";
    connection.query(query,[id],(err,result)=>{
        if(!err){
            if(result.length > 0){
                return res.json(result);
            }else{
                return res.json({message:"In valid User "});
            }
        }
        else{
            return res.json(err)
        }
    })
})







module.exports=router;