import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "../styles/Inicio.css"

const Inicio = () => {
return(
  <div className="App">

<header className="App-header">
      <div>

      <img 
    src="https://svgshare.com/i/PMs.svg"  className="logo" 
    alt="Smt logo"
    height="150"
     width="280" />
      </div>
     <form>

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </form>
    <button className="button" type="button">Iniciar Sesión</button>
 
    <h4>¿Olvidates tu contraseña? </h4>
   
    <div className="register">
    <a href="https://www.google.com/"> <h4><u><b> Registrarse</b></u></h4></a>
    </div>
    <div className="cuenta">
    <h4>¿No tienes una cuenta?</h4> 
    
    </div>
    <div className="ore">
    <h3>ó</h3> 
    </div>
    <div className="logof">
     <img src="https://image.flaticon.com/icons/svg/174/174848.svg" 
    alt="logof"
    height="40"
     width="80"/>
   </div>
   <div className="logog">
     <img src="https://image.flaticon.com/icons/svg/2702/2702602.svg"  
    alt="logog"
    height="40"
     width="80" />
    </div>
      </header>
  </div>
)
};
export default withRouter(Inicio);