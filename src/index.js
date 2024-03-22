import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-multi-carousel/lib/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-double-range-slider/dist/cjs/index.css";
import { Provider } from "react-redux";
import store from "./Slice/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
