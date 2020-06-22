import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../pages/home";
import Contact from "../pages/contact";
import Splash from "../pages/splash";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route exact path="/" component={Splash} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Routes);
