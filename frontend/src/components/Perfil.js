import React from "react";
import { Link, withRouter } from "react-router-dom";

import Navegation from "../components/Navegation";
const Perfil = () => {
  return (
    <div className="Perfil">
      <Navegation />

      <center>
        <img
          src="https://i.ibb.co/GVN7nst/perfil.png"
          class="img-fluid"
          alt="Perfilphoto"
        />
        <center>
         
          <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal-xl">
              <li className="list-group-item"> Medellín - Colombia </li>
              <li className="list-group-item">
                Número de dispositivos
                <span className="badge badge-primary badge-pill">6</span>
              </li>
              <li className="list-group-item">
                Número de Grupos
                <span className="badge badge-primary badge-pill">3</span>
              </li>
            </ul>
          </div>

        </center>
        <a href="/" className="list-group-item list-group-item-action">
          Lista de Grupos
        </a>
        <a
          href="/"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          Grupo Casa
        </a>
        <span className="badge badge-primary badge-pill">2</span>
        <a
          href="/"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          Grupo Trabajo
        </a>
        <span className="badge badge-primary badge-pill">2</span>
        <a
          href="/"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          Grupo casa 2
        </a>
        <span className="badge badge-primary badge-pill">2</span>
        <a
          href="/"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          Grupo Invitados
        </a>
        <span className="badge badge-primary badge-pill">2</span>
      </center>
    </div>
  );
};

export default withRouter(Perfil);
