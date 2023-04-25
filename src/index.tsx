import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { commonStore } from "./common-store/common-store";
import { appStoreContext } from "./store/appStoreHooks";
import { commonContext } from "./common-store/commonStoreHooks";
import { appStore } from "./store/app-store";
import App2 from "./App2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={appStore} context={appStoreContext}>
    <Provider store={commonStore} context={commonContext}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
