import React from "react";
import { Link, withRouter } from "react-router-dom";

const Codigo = (props) => {
  const { history } = props;
  return (
    <div className="Codigo">
      <center>
        {" "}
        <p className="font-weight-normal">
          <h1>Codigo de Recuperacion</h1>{" "}
        </p>{" "}
      </center>

      <label for="exampleInputCodigo">
        {" "}
        <p>Ingrese su Codigo</p>{" "}
      </label>
      <input
        type="Codigo"
        className="form-control"
        id="exampleInputCodigo"
        placeholder="Codigo"
      ></input>

      <p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => history.push("/Inicio")}
        >
          {" "}
          Confirmar{" "}
        </button>{" "}
      </p>
    </div>
  );
};

export default withRouter(Codigo);
