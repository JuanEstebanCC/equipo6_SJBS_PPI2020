import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Perfil from "../components/Perfil";
import Dispositivos from "../components/Dispositivos";
import Codigo from "../components/Codigo";
import IngresoG from "../components/IngresoG";
import Registro from "../components/Registro";
import Inicio from "../components/Inicio";
import RecuperarC from "../components/RecuperarC";
import Grupos from "../components/Grupos";
import Auto from "../components/Auto";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/Perfil" component={Perfil} />
      <Route path="/Dispositivos" component={Dispositivos} />
      <Route path="/Codigo" component={Codigo} />
      <Route path="/IngresoG" component={IngresoG} />
      <Route path="/Registro" component={Registro} />
      <Route path="/Inicio" component={Inicio} />
      <Route path="/RecuperarC" component={RecuperarC} />
      <Route path="/Grupos" component={Grupos} />
      <Route path="/Auto" component={Auto} />
    </BrowserRouter>
  );
}
