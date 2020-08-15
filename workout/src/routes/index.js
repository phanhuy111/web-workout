import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import Home from "../pages/home";
import Contact from "../pages/contact";
import Splash from "../pages/splash";

// Form
import FormUser from "../components/Form/FormUser";
import FormHealth from "../components/Form/FormHealth";
import FormDisease from "../components/Form/FormDisease";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/welcome" component={Splash} />
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

const RoutesForm = (props) => {
  return (
    <StateMachineProvider>
      <Router>
        <Route exact path="/user" component={FormUser} />
        <Route path="/health" component={FormHealth} />
        <Route path="/disease" component={FormDisease} />
      </Router>
    </StateMachineProvider>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Routes);
