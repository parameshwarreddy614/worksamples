
var messages=[
    {
        message:"hello how are you",
        from:"ravikanth"
    }
]
exports.home= (request,response) => {
    response.send("You are in home page");
    }

    exports.login= (request,response) => {
        var user=request.body;
         if(user.username == "abc" && user.password == "abc"){
           response.send({token:123});
         }
         else{
             response.send("login failure");
         }
      }
exports.messages=function(request,response){
    var token= request.params.token;

    if(token == 123){
        response.send(messages);
    }
    else
    { 
        console.log("I am inside else");
        response.status(401).send("unauthorized access");
    }
}

