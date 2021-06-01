import axios from 'axios';

const BASE_URL="http://localhost:10899/user/";

export function registerNewUser(user){
    console.log("I am in register action",user);
  var promise=axios.post(`${BASE_URL}register`,user);
  return {
      type:"REGISTER",
      payload:promise
  }
}