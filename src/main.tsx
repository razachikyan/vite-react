import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./styles/global.scss";
import "./styles/fonts.scss";

setTimeout(function () {
  document.body.className = "";
}, 500);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
