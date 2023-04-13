import React from "react";
import "./anuncio.css";


function Anuncio(props){

    return (
        <div className="publicidad">
            <p>{props.titul}</p>
            <img className="impubli" src={props.imgen} />
        </div>
    )
}

export default Anuncio