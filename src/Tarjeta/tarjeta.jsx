import React from "react";
import "./tarjeta.css"
import { useState } from "react";

function Tarjeta(props){
    const [contador,setContador] = useState(0)

    function sumar(){
        setContador(contador+1)
    }
    function resta(){
        setContador(contador-1)
    }

    return (
        <div id="sectarjeta" className="seccion3 flex-container">
            <div className="orden">
                <h1 className="h1titul">{props.title}</h1>
                <img className="image" src={props.ruta} />
                <div className="cantidad"> 
                    <h2>Cantidad</h2>
                    <div className="botones">
                        <button className="btnsm" onClick={resta}>-</button>
                        <h1>{contador}</h1>
                        <button className="btnsm"  onClick={sumar}>+</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tarjeta