import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import "rc-slider/assets/index.css";
import Header from "./components/Header";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
