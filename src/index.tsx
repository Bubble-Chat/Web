import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1015934528915-65mrm1mkberk0v3vh5p60qkjutcp5ie5.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
