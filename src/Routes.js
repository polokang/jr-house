import React from "react"
import { Route, Switch } from "react-router-dom"
import House from "./House/houses"
import HouseEditView from "./House/HouseEditView"
import Users from "./User/users"
import Owner from "./Owner/owners"
import OwnerEditView from "./Owner/OwnerEditView"

export default () => (
  <Switch>
    <Route exact path="/" component={House} />
    <Route exact path="/houses" component={House} />
    <Route exact path="/houses/edit/NEW" component={HouseEditView} />
    <Route exact path="/owners" component={Owner} />
    <Route exact path="/owners/edit/NEW" component={OwnerEditView} />
    <Route exact path="/users" component={Users} />
  </Switch>
)
