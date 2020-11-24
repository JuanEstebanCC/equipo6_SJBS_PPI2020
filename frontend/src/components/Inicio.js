import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Inicio.css";

const Inicio = (props) => {
  const { history } = props;
  return (
    <div className="fondo">
      <div className="imagen">
        <img
          src="https://svgshare.com/i/PMs.svg"
          width="40%"
          alt="Logo"
        />
      </div>
      <div className="title">
        <h3>SmarterHome</h3>
      </div>
      <div className="formulario">
        <form>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </form>
      </div>
      <button
        className="btn"
        type="button"
        onClick={() => history.push("/Dispositivos")}
      >
        Iniciar Sesión
      </button>

      <div className="olvido">
        <h6> 
        <a href="/IngresoG"> ¿Olvidates tu contraseña? </a>
        </h6>
        <hr />
        <div className="no-cuenta">
          <h6>¿No tienes cuenta? </h6>
          <a href="/Registro"> Registrate </a>
        </div>
      </div>
      <div className="otros">
        <h5>Ó</h5>
        <div className="ingreso-r">
        <a href="https://www.facebook.com/" target="_blank">
         <img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Logo Google"
         width="40px" height="40px" />
        </a>
        <br/>
        <br/>
        <a href="https://www.google.com/" target="_blank">
         <img src="https://image.flaticon.com/icons/svg/2702/2702602.svg" alt="Logo Google"
         width="40px" height="40px" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Inicio);
