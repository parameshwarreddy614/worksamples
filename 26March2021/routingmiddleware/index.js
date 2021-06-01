var express=require('express');
  var app=express();
  // Get - provide a resource  from server
  app.use(express.json());

  var userRoute=require('./routes/user.route');
  var adminRoute= require('./routes/admin.route');

  app.use(adminRoute);
  app.use(userRoute);


  app.listen(9013, () => {
      console.log("server started!");
  })
