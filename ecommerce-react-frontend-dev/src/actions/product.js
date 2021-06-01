import axios from 'axios';

const BASE_URL="http://localhost:10899/admin/";

export function getAllProducts(){

   console.log("I am in get All Products!!");

   var promise=axios.get(`${BASE_URL}allProducts`);

   return {
       type:'ALL_PRODUCTS',
       payload: promise
   }

}

export function getSpecificProduct(pid){
    console.log("I am in get specific Products!!");
    var promise=axios.get(`${BASE_URL}product/${pid}`);
 
    return {
        type:'CURRENT_PRODUCT',
        payload: promise
    }
 }
