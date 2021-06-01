var express= require('express');

var router=express.Router();

var userController= require('../controllers/user.controller');



router.use(function(req,res,next){
    console.log("router level middleware-1");
    next();
})

router.use(function(req,res,next){
    console.log("router level middleware-2");
    next();
})
router.get('/homepage',userController.home);
router.post('/login',userController.login)
router.get('/messages/:token',userController.messages)

module.exports=router;


