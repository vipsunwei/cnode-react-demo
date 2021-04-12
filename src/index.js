import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
// import zh_CN from 'antd/lib/locale-provider/zh_CN'
import zhCN from "antd/es/locale/zh_CN";
import store from "./redux/store/store";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <App />
      </ConfigProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
