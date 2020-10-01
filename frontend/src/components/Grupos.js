import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "../styles/Grupos.css"

import Navegation from "../components/Navegation";
const Grupos = () => {
return (
  <div className="HeaderC">
  <Navegation/>

  <div className="perfil">
  <nav className="my-2 my-md-0 mr-md-3">
    <img
      className="perfil"
      width="50"
      height="50"
      src="https://i.ibb.co/GVN7nst/perfil.png"
      alt="perfil"
    />
  </nav>
</div>
<div className="cardopen">
  <div className="cardborder">
    <div classNameName="card border-secondary mb-3">
      <div className="card-header">Casa</div>
      <div className="card-body text-secondary">
        <p className="card-text">Abrir</p>
        <p className="card-text1">Cerrar</p>
      </div>
    </div>
  </div>
  <div className="cardborder">
    <div classNameName="card border-secondary mb-3">
      <div className="card-header">Empresa</div>
      <div className="card-body text-secondary">
        <p className="card-text">Abrir</p>
        <p className="card-text1">Cerrar</p>
      </div>
    </div>
  </div>
  <div className="cardborder">
    <div classNameName="card border-secondary mb-3">
      <div className="card-header">Baños</div>
      <div className="card-body text-secondary">
        <p className="card-text">Abrir</p>
        <p className="card-text1">Cerrar</p>
      </div>
    </div>
  </div>
</div>

</div>
);
};
export default withRouter(Grupos);