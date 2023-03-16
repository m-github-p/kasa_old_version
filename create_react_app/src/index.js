//Import de React et ReactDOM.
import React from "react";
import ReactDOM from "react-dom/client";

//Import du paramétrage HTML et CSS de l'application.
import App from "./App/App";
import "./App/App.css";

//Déclaration et initialisation de la racine du projet ("root").
const root = ReactDOM.createRoot(document.getElementById("root"));

//Affichage de l'application React dans la racine du projet.
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);