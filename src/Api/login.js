import axios from "axios";
const BASE_URL="http://localhost:3002/jr/auth";
export function Login_url(email,password){
 return axios
 .post(`${BASE_URL}`,  {
  "email": `${email}`,
  "password": `${password}`
})
   .then(response=>{
     const name= response.data.data.name;
          return {
         name:`${name}`
     };
     }).catch(error=>{
      //  console.log("invalid email and password");
        alert( error.response.data.error);
     });
    
      
     
   
    // if(name){
    //     return (`welcome! ${name}`);
    // }else{
    // //     return("invaild email or password");
    // // }  

}