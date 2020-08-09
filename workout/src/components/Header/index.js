import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { styles } from "./styles";

const Header = () => {
  return (
    <nav>
      <div style={styles.row}>
        <img
          style={styles.logo}
          alt="weegiefood logo"
          src="https://www.healthymealplans.com/static/images/HMP-LOGO_horizontal.png"
        />
        <ul style={styles.main_nav}>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="#meals">
              Food delivery
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="#steps">
              How it works
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="#cities">
              Our cities
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="#plans">
              Sign up
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default connect(null, null)(Header);
