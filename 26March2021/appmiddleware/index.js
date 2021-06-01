var express= require('express');

var app=express();

// Application Level Middleware
var auth=function(request, response,next){

    console.log("middleware 1 called")
   if(request.headers.token == 1235){
       next();
   }
   else
   {
       response.send('invalid token | token need to be provided');
   }
}
// http://localhost:9011/user
app.get('/user', function(request,response) {
    response.send({name:"Ravi",address: "hyderabad"});
})

app.use(auth);
app.use(function(req,res,next){
    console.log("middleware-2");
    next();
})

app.get('/admin', function(request,response) {
    response.send({name:"admin",address: "secbad"});
})

app.listen(9011, () => {
    console.log("server started!")
})