import React from "react";
import {Switch,Route} from "react-router-dom";
import Login from "../content/login";
import Register from "../content/register";
export default()=>(
    // 不用exact 的话 那么就只是匹配第一个正确的 如：uers/a 和 users/ 会取users 而不是 users/a
 <Switch>
  <Route exact path="/" component={Login}/>
  <Route exact path="/register" component={Register}/>
 </Switch>
);