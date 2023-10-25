import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Loader from "./common/component/Loader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
      <Loader />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
