import React from "react";
import "./anuncio.css";
import { Helmet } from "react-helmet";

function Anuncio(props){

    return (
        <div className="publicidad">
            <p>imagen publicitaria</p>
            <img className="impubli" src={props.imgen} />
        </div>
    )
}

export default Anuncio