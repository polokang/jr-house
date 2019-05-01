import React from "react";
import Register from "./register";
import { Register_url } from "../APi/register";
export default class Registerchannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      First_name: "",
      Last_name: "",
      Full_name: "",
      Email: "",
      phone: 0,
      password: ""
    };
  }
  set_FirstName(event) {
    this.setState({ First_name: event.target.value });
  }
  set_LastName(event) {
    this.setState({ Last_name: event.target.value });
  }
  set_Full_name(event) {
    this.setState({ Full_name: event.target.value });
  }
  set_Email(event) {
    this.setState({ Email: event.target.value });
  }
  set_phone(event) {
    this.setState({ phone: event.target.value });
  }
  set_password(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }
  handleclick() {
    Register_url(
      this.state.First_name,
      this.state.Last_name,
      this.state.Full_name,
      this.state.phone,
      this.state.Email,
      this.state.password
    ).then(data => {
      console.log(data);
    });
  }

  render() {
    const {
      First_name,
      Last_name,
      Full_name,
      phone,
      Email,
      password
    } = this.state;
    return (
      <React.Fragment>
        <Register
          First_name={First_name}
          Last_name={Last_name}
          Full_name={Full_name}
          phone={phone}
          Email={Email}
          password={password}
          set_FirstName={event => {
            this.set_FirstName(event);
          }}
          set_LastName={event => {
            this.set_LastName(event);
          }}
          set_Full_name={event => {
            this.set_Full_name(event);
          }}
          set_Email={event => {
            this.set_Email(event);
          }}
          set_phone={event => {
            this.set_phone(event);
          }}
          set_password={event => {
            this.set_password(event);
          }}
          handleclick={()=>{
              this.handleclick();
            }}
        />
      </React.Fragment>
    );
  }
}
