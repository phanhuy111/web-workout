import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../pages/home";
import Contact from "../pages/contact";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Routes);
