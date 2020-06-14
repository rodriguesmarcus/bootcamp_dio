import React from "react";
import PropTypes from "prop-types";

import "./Titulo.css";

// function Titulo (props) {
//     return (
//         <h1 class="titulo-verm">
//             {props.children}
//         </h1>
//     );
// }

// destructuring

function Titulo({ children, cor }) {
    return (
        <h1 className={cor}>
            {children} {cor}
        </h1>
    );
}

Titulo.propTypes = {
    children: PropTypes.node.isRequired,
    cor: PropTypes.oneOf(["vermelho", "azul", "verde"]).isRequired
}

// É possível criar um valor default para quando quisermos atributos com valores padrão

Titulo.defaultProps = {
    cor: "vermelho"
}

export default Titulo;