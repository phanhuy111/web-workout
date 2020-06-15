import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        className={
          this.props.bgImage
            ? "transparent navbar navbar-default"
            : "navbar_default"
        }
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/#/login" className="navbar-brand">
              <img src="/images/meal-kitchen-logo.png"></img>
            </a>
          </div>
          <div className={this.props.bgImage ? "hide" : "show navbar-right"}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">{"Login"}</Link>
              </li>
              <li>
                <Link>{"Log Out"}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default connect(null, null)(Header);
