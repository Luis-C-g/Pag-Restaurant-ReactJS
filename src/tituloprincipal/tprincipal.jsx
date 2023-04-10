import React from "react";
import "./tprincipal.css"

function Principal(props){
    return (
        <section className="titulo container">
            <h1 className="titlirest flex-item" >{props.nombre}</h1>
            <h2 className="parraforest flex-item">{props.info}</h2>
            <button className="btnmenu" onClick={() => window.location.href='#secsecundaria'}> VER MENU</button>
            <button className="btnordenar"  onClick={() => window.location.href='#sectarjeta'}>ORDENAR</button>
        </section>
    )
}

export default Principal