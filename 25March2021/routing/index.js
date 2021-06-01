var express=require('express');
  var app=express();
  // Get - provide a resource  from server
  app.use(express.json());

  var userRoute=require('./routes/user.route');

  app.use(userRoute);

  app.listen(9013, () => {
      console.log("server started!");
  })
