import React from "react"
import { Route, Switch } from "react-router-dom"
import House from "./House/houses"
import Users from "./User/users"
import Owner from "./Owner/owners"
import Loginchannel  from "./content/Loginchannel";
import Registerchannel from "./content/Registerchannel";
export default () => (
  <Switch>
    <Route exact path="/" component={Loginchannel}/>
    <Route exact path="/register" component={Registerchannel}/>
    <Route exact path="/" component={House} />
    <Route exact path="/houses" component={House} />
    <Route exact path="/owners" component={Owner} />
    <Route exact path="/users" component={Users} />
  </Switch>
)
