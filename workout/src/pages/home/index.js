import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { styles } from "./styles";

const Home = () => {
  return <div style={styles.container}></div>;
};

export default connect(null, null)(Home);
