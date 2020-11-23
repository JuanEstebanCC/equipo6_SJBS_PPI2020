import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Registro.css";


const Registro = (props) => {
  const { history } = props;
  return (
    
      <div className="container">
       

        <img src="https://svgshare.com/i/PMs.svg" className="Logo" alt="Responsive image">
  
         
        

        <center>
          <h2>Registrar</h2>
        </center>

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
            <label for="pwd">Correo Electronico:</label>

            <input
              type="Correo"
              className="form-control"
              id="pwd"
              placeholder="Ingrese su correo"
              name="pswd"
              required
            />
           
            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="pwd">Contraseña:</label>
            <input
              type="password"
              className="col-sm form-control"
              id="pwd"
              placeholder="Ingrese su contraseña"
              name="pswd"
              required
            />

            <div className="valid-feedback">Valida.</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              F
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              M
            </label>
          </div>
         
          
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => history.push("/Ingreso")}
            >
              {" "}
              Registrar{" "}
            </button>{" "}
          
        </form>
        
  </div>
    </div>


    </div>
  );
};

export default withRouter(Registro);
