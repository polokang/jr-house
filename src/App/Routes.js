import React from "react";
import {Switch,Route} from "react-router-dom";
// 这里要用loinchannel 而不是login 不然的话 拿不到this.state的值
import Loginchannel  from "../content/Loginchannel";
import Register from "../content/register";
export default()=>(
    // 不用exact 的话 那么就只是匹配第一个正确的 如：uers/a 和 users/ 会取users 而不是 users/a
 <Switch>
  <Route exact path="/" component={Loginchannel}/>
  <Route exact path="/register" component={Register}/>
 </Switch>
);