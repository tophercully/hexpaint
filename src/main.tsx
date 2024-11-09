import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import { NotifProvider } from "./contexts/NotificationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotifProvider>
      <App />
    </NotifProvider>
  </React.StrictMode>,
);
