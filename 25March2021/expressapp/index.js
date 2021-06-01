var express=require('express');
  var app=express();
  // Get - provide a resource  from server
  app.use(express.json());
  var users=[
      {
          name:"ravi",
          address: "hyderabad"
      },
      {
          name:"kiran",
          address: "secunderabad"
      }
  ]
 
   // http://localhost:9013/allUsers
   app.get('/allUsers',function(request,response){ 
    response.send(users);
   })

  // Post -used to send data to the server

  //http://localhost:9013/addUser
  app.post('/addUser',function(request,response){
    console.log('request',request)
    console.log('response',response);
        var user=request.body;
         users.push(user);
         response.send(users);
  })

  app.listen(9013,function(){
      console.log("server started!!");
  })