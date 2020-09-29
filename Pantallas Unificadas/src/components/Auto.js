import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Auto.css";

import Navegation from "./Navegation";

const Auto = () => {
  return (
    <div>
      <Navegation />
      <div className="perfil">
        <nav className="my-2 my-md-0 mr-md-3">
          <img className="perfil" src="./img/Perfil.png" alt="perfil" />
        </nav>
      </div>
      <fieldset className="form-group">
        <div className="cajon">
          <nav className="my-2 my-md-0 mr-md-3">
            <img className="abierta" src="./img/Reloj.png" alt="abierta" />
          </nav>
          <div className="proceso">
            <h6>Dias De Trabajo</h6>
            <img className="Puntos" src="./img/Puntos.png" alt="Puntos" />
          </div>

          <div className="Dias">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="checkbox" checked="" autocomplete="off" /> L
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> M
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> W
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> J
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> V
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> S
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> D
              </label>
            </div>
          </div>

          <div className="Informacion">
            <h7 class="card-title">Grupo: Empresa</h7>
            <h9 class="card-title">. </h9>
            <h7 class="card-title">Dispositivos: 4</h7>
          </div>

          <div className="Hora">
            <h7>ABRIR: </h7>
            <h7>6:00 AM</h7>
            <h1></h1>
            <h7>CERRAR: </h7>
            <h7>7:00 PM</h7>
          </div>
        </div>
      </fieldset>
      <fieldset className="form-group">
        <div className="cajon">
          <nav className="my-2 my-md-0 mr-md-3">
            <img className="abierta" src="./img/Reloj.png" alt="abierta" />
          </nav>
          <div className="proceso">
            <h6>Fin de semana</h6>
            <img className="Puntos" src="./img/Puntos.png" alt="Puntos" />
          </div>

          <div className="Dias">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="checkbox" checked="" autocomplete="off" /> L
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> M
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> W
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> J
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> V
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> S
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> D
              </label>
            </div>
          </div>

          <div className="Informacion">
            <h7 class="card-title">Grupo: Casa</h7>
            <h9 class="card-title">. </h9>
            <h7 class="card-title">Dispositivos: 6</h7>
          </div>

          <div className="Hora">
            <h7>ABRIR: </h7>
            <h7>8:00 AM</h7>
            <h1></h1>
            <h7>CERRAR: </h7>
            <h7>7:00 PM</h7>
          </div>
        </div>
      </fieldset>
      <fieldset className="form-group">
        <div className="cajon">
          <nav className="my-2 my-md-0 mr-md-3">
            <img className="abierta" src="./img/Reloj.png" alt="abierta" />
          </nav>
          <div className="proceso">
            <h6>Dias De Descanso</h6>
            <img className="Puntos" src="./img/Puntos.png" alt="Puntos" />
          </div>

          <div className="Dias">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="checkbox" checked="" autocomplete="off" /> L
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> M
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> W
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> J
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> V
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> S
              </label>
              <label className="btn btn-primary active">
                <input type="checkbox" autocomplete="off" /> D
              </label>
            </div>
          </div>

          <div className="Informacion">
            <h7 class="card-title">Grupo: Casa</h7>
            <h9 class="card-title">. </h9>
            <h7 class="card-title">Dispositivos: 7</h7>
          </div>

          <div className="Hora">
            <h7>ABRIR: </h7>
            <h7>9:00 AM</h7>
            <h1></h1>
            <h7>CERRAR: </h7>
            <h7>8:00 PM</h7>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
export default withRouter(Auto);
