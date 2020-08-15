import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { styles } from "./styles";

const Splash = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <span style={styles.title_text}>{"FAREWELL JUNK FOOD."}</span>
        <span style={styles.title_text}>{"WELCOME SUPER HEALTHY MEALS"}</span>
      </div>
      <div style={styles.button}>
        <Link to="/home" style={styles.button_text}>
          {"GET STARTED"}
        </Link>
      </div>
    </div>
  );
};

export default connect(null, null)(Splash);
