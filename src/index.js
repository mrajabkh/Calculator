import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import App from "./App"
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//npm install react-dom
//npm install -g parcel