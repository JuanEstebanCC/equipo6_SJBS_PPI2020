import React from 'react';
import { Link, withRouter } from "react-router-dom";

const IngresoG = ( ) =>{
return (

<div className="App">
      <img
        src="https://svgshare.com/i/PMs.svg"
        className="logo"
        alt="Smt logo"
        height="150"
        width="280"
      />
      <div className="titulo">
        <h3> Ingrese su Email </h3>
      </div>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email"
      />

      <button className="button" type="button">
        Confirmar
      </button>
    </div>



)



}

export default withRouter(IngresoG);