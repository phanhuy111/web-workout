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
            <a style={styles.sub_title} href="/">
              {"Food delivery"}
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="/">
              {"Contact"}
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="/">
              {"Sign in"}
            </a>
          </li>
          <li style={styles.line_header}>
            <a style={styles.sub_title} href="/">
              {"Sign up"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default connect(null, null)(Header);
