import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "../styles/RecuperarC.css"

const RecuperarC = (props) => {
const { history } = props;
return(
  <div className="App">
  <header className="App-header">
   <img 
src="https://svgshare.com/i/PMs.svg"  className="logo" 
alt="Smt logo"
height="150"
 width="280" />
 <form>

<input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nueva Contraseña"/>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar Contraseña" />
</form>
<button className="button" type="button"
onClick={() => history.push("/Inicio")}
>Confirmar
</button>
</header>
</div>
)
};
export default withRouter(RecuperarC);