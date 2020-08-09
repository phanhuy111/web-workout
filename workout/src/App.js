import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import store from "./store";
import { styles } from "./utils/styles";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <Header />
          <div style={styles.content}>
            <Routes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
