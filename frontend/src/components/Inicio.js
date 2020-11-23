import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "../styles/Inicio.css"

const Inicio = (props) => {
  const { history } = props;
  return(
  <div className="App">


      


      <img src="https://svgshare.com/i/PMs.svg" className="Logo" alt="Responsive image">
   
      
     <form>

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </form>
    <button className="button" type="button"
    
    onClick={() => history.push("/Dispositivos")}
    
    >Iniciar Sesión</button>

 <button className="button" type="button"
    

    onClick={() => history.push("/IngresoG")}
    
   ><h4>¿Olvidates tu contraseña? </h4></button>

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
    <a href="https://www.google.com/"><u><b> <img src="https://image.flaticon.com/icons/svg/174/174848.svg"
    alt="logof"
    height="40"
     width="80"/></b> </u> </a>
   </div>
   <div className="logog">
   <a href="https://www.google.com/"><u> <b>  <img src="https://image.flaticon.com/icons/svg/2702/2702602.svg"
    alt="logog"
    height="40"
     width="80" /></b> </u> </a>
    </div>
     
  </div>
)
};

export default withRouter(Inicio);