import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App";
import "./i18n.js";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>
);
