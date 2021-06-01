var express= require('express');

var router=express.Router();


router.get('/adminPage',function(req,res){
    res.send("admin page called");
});

module.exports=router;


