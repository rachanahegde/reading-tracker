import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// TODO Import context providers to manage state across the application

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
