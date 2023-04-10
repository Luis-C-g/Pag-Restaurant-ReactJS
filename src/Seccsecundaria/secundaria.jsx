import React from "react";
import "./secundaria.css";
import { useState } from "react";

function Secundaria(props){
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const handleClick = () => {
    setMostrarInfo(!mostrarInfo);
    }

    return (
        <div id="secsecundaria" className="divseccion">
            <h2 className="tplatillo">{props.title}</h2>
            <img className="imge" src={props.ruta} />
            <button className="btnmostrar" onClick={handleClick}>
                {mostrarInfo ? "Ocultar" : "Ver ingredientes"}
            </button>
            {mostrarInfo && (<div><p className="descrip">{props.descripcion}</p></div>)}
            
        </div>
    )
}

export default Secundaria