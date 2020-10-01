import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link className="navbar-brand" to="/Dispotivos">
        Menú
      </Link>
      <div className="Boton">
        <button type="button" class="btn btn-danger">
          +
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/Dispositivos">
              Dispositivos<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Grupos">
              Grupos
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Auto">
              Automatico
            </Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Perfil">
              Perfil
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Inicio">
              Cerrar Sesión
            </Link>
            
          </li>
        
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navegation);
