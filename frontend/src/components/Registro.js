import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Registro.css";

import Navegation from "./Navegation";

const Registro = () => {
  return (
    <div>
      <Navegation />;
    </div>
  );
};
export default withRouter(Registro);
