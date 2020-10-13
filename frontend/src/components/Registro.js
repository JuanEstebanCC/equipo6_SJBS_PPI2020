import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Registro.css";



const Registro = (props) => {
const { history } = props;
  return (
    <div>
      <form>
      <fieldset>
        <div id="Nombre" className="form-group">
          <input
            type="email"
            className="form-control"
            id="inputN"
            aria-describedby="emailHelp"
            placeholder="Nombre"
          />
          
          
        </div>

<div id="Apellido" className="form-group">
        <input
          type="email"
          className="form-control"
          id="inputA"
          aria-describedby="emailHelp"
          placeholder="Apellido"
        />
        
        </div>

 <div id="Correo" className="form-group">

        <input
          type="email"
          className="form-control"
          id="inputCR"
          aria-describedby="emailHelp"
          placeholder="Correo"
        />
        <small id="emailHelp" className="form-text text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
        </small>
        </div>

    <div id="Contraseña" className="form-group">
          <input
            type="password"
            className="form-control"
            id="inputAC"
            placeholder="Contraseña"
          />
          <small id="emailHelp" className="form-text text-muted">
        Caracteres Max 1-(8)
        </small>
        </div>
        <div id="CContraseña" className="form-group">
          <input
            type="password"
            className="form-control"
            id="inputCC"
            placeholder="Confirmar Contraseña"
          />
         
        </div>
        <div  className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >   
          <button className="button"  type="button" onClick={() => history.push("/Dispositivos")}
    >Registrarse
    </button>
        </div>
      </fieldset>
    </form>
    </div>
  );
};
export default withRouter(Registro);
