import axios from "axios";
const BASE_URL="http://localhost:3002/jr/users/register";
export function Register_url(First_name,Last_name,Full_name,phone,Email,password){ 
 return axios
 .post(`${BASE_URL}`,  {
    "firstName": First_name,
    "lastName": Last_name,
    "fullName": Full_name,
    "email": Email,
    "password": password,
    "phone": phone
})
   .then(response=>{
     const code= response.data.code;
         if (code===201){
    
           alert("Congratulations! success");
          
         }
      
     }).catch(error=>{
      //  console.log("invalid email and password");
        alert( error.response.data.error);
     });
   
    }