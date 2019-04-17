import React from "react";
import Login from "./login";
import{Login_url} from "../API/login";
export default class Loginchannel extends React.Component{
    constructor(props){
        super(props);
         this.state={
            Email: "",
            password:"",
            handleclick: false
        }
    }
    // event.target.value is the value that user input
    // componentwillmount 上到下执行代码前先做然后再render 再componentdidmount  componentdidmount 上到下执行完代码后 在执行 然后他还会执行一次render   
    Inputemail(event){
        this.setState({Email: event.target.value});
        // console.log(event.target.value);
        // console.log(this.state.Email);
    }
    Inputpassword(event){
        this.setState({password: event.target.value});
    }
    handleclick(){
     Login_url(this.state.Email,this.state.password).then(data=>{
      console.log(data);
    });
      
     }
   
        
    render(){
        const {Email,password}=this.state;
        return (
            <React.Fragment>
                <Login Email={Email} password={password} Inputemail={(event)=>{
                    this.Inputemail(event);
                }} Inputpassword={(event)=>{
                    this.Inputpassword(event)
                }} handleclick={()=>{this.handleclick()}}
                />
            </React.Fragment>
        )
    }
}