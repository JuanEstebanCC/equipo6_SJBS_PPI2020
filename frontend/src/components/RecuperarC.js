import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "../styles/RecuperarC.css"

const RecuperarC = (props) => {
const { history } = props;
return(
  <div className="App">
  <header className="App-header">
  <img src="https://svgshare.com/i/PMs.svg" className="Logo" width="450px" height="450px" alt="Responsive image"/>
 <form>

<input type="password" clasasName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nueva Contraseña"/>
<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirmar Contraseña" />
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