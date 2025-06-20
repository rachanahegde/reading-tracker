import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// Import context providers to manage state across the application
import { UserProvider } from "./contexts/UserContext";
import { BooksProvider } from "./contexts/BooksContext";
import { DragonProvider } from "./contexts/DragonContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DragonProvider>
          <BooksProvider>
            <App />
          </BooksProvider>
        </DragonProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
