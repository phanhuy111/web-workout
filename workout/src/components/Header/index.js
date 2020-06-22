import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="row">
        <img
          src="resources/img/logo-white.png"
          alt="FastFood logo"
          className="logo"
        />
        <img
          src="resources/img/logo.png"
          alt="FastFood logo"
          className="logo-black"
        />
        <ul className="main-nav js--main-nav">
          <li>
            <a href="#features">{"Food delivery"}</a>
          </li>
          <li>
            <a href="#works">{"How it works"}</a>
          </li>
          <li>
            <a href="#cites">{"Our cities"}</a>
          </li>
          <li>
            <a href="#plans">{"Sign up"}</a>
          </li>
        </ul>
        <a className="mobile-nav-icon js--nav-icon ">
          <ion-icon className="nav-icon" name="menu" />
        </a>
      </div>
    </nav>
  );
};

export default connect(null, null)(Header);
