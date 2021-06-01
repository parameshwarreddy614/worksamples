var express= require('express');

var router=express.Router();

var userController= require('../controllers/user.controller');

router.get('/homepage',userController.home);
router.post('/login',userController.login)
router.get('/messages/:token',userController.messages)

module.exports=router;


