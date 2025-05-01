//Renderizado.
import React from "react";
import { createRoot } from "react-dom/client";

//Taiwind y CSS.
import "./index.css";

//Componentes propios.
import MainContent from "./components/MainContent";

createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>
);
