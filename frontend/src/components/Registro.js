import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Registro.css";

const Registro = (props) => {
  const { history } = props;
  return (
    <div className="container">
      <div className="imagen">
        <img src="https://svgshare.com/i/PMs.svg" width="40%" alt="Logo" />
      </div>

      <center>
        <h2>Registrarse</h2>
      </center>
      <center>
        <form action="/action_page.php" className="was-validated" method="post">
          <div className="form-group">
            <label for="uname">Nombre Completo:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa un usuario"
              name="uname"
              required
            />
            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>

          <div className="form-group">
            <label for="uname">Apellido:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa tu apellido"
              name="uname"
              required
            />
            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="uname">Email:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa tu Email"
              name="uname"
              required
            />
            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="uname">Contraseña:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa tu contraseña"
              name="uname"
              required
            />
            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="uname">Confirmar contraseña:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Confirmar contraseña"
              name="uname"
              required
            />
            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
         
        </form>
        
      </center>
      <div className="boton-registro">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => history.push("/Ingreso")}
          >
            Registrar
          </button>
          </div>
    </div>
  );
};

export default withRouter(Registro);
