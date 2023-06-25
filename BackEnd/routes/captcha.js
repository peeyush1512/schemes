const svgcaptcha=require('svg-captcha');
const express=require('express');
const router = express.Router();


router.get('/getcaptcha',(req,res)=>{
    let captcha=svgcaptcha.create({
        size:6,
        ignoreChars:'0OoXxIlZzyY',
        color:'#060c0f',
        background:'#ebf2f5'
    });

    return res.json(captcha);
})






module.exports=router;