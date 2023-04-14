import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Anuncio from './Anuncio/anuncio'
import Secundaria from './Seccsecundaria/secundaria'
import Tarjeta from './Tarjeta/tarjeta'
import Principal from './tituloprincipal/tprincipal'
import imgpollo from './assets/pollo.png'
import imgensalada from './assets/ensalada.png'
import imgsopa from './assets/sopa.png'
import imgpescado from './assets/pescado.png'
import imglasaña from './assets/lasaña.png'
import imgpastel from './assets/pastel.png'
import publicidad1 from './assets/publicidad1.png'
import publicidad2 from './assets/publicidad2.png'


function App() {
  
  return (
    <div className="App">
      <Principal nombre="RESTAURANT  THE HAPPY TABLE" info="Ofrecemos una amplia variedad de platillos preparados con los mejores ingredientes frescos y locales, desde ensaladas frescas hasta suculentas carnes y mariscos."></Principal>
      <div className="secsecundaria flex-container">
        <Secundaria title="Pollo al horno" ruta={imgpollo} descripcion=" Un pollo tierno y jugoso con una deliciosa mezcla de hierbas frescas y limón." ></Secundaria>
        <Secundaria title="Ensalada de quinoa" ruta={imgensalada} descripcion=" Una ensalada fresca y saludable hecha con quinoa cocida, aguacate, tomate, cebolla roja y cilantro." ></Secundaria>
        <Secundaria title="Sopa con queso parmesano" ruta={imgsopa} descripcion="Una sopa cremosa y reconfortante hecha con tomates asados y queso parmesano rallado." ></Secundaria>
        <Secundaria title="Pescado a la plancha" ruta={imgpescado} descripcion="Pescado a la plancha con una salsa de cilantro fresca y picante con limón."></Secundaria>
        <Secundaria title="Lasaña vegetariana" ruta={imglasaña} descripcion="Una lasaña vegetariana llena de espinacas frescas y queso ricotta cremoso."></Secundaria>
        <Secundaria title="Pastel de carne" ruta={imgpastel} descripcion="Un pastel de carne tradicional hecho con carne molida sazonada y cubierto con puré de papas cremoso y gravy caliente."></Secundaria>
      </div>
      <div className='comptarjeta '>
        <Tarjeta title="Pollo al horno" ruta={imgpollo}></Tarjeta>
        <Tarjeta title="Ensalada de quinoa" ruta={imgensalada}></Tarjeta>
        <Tarjeta title="Sopa con queso parmesano"  ruta={imgsopa}></Tarjeta>
        <Tarjeta title="Pescado a la plancha" ruta={imgpescado} ></Tarjeta>
        <Tarjeta title="Lasaña vegetariana" ruta={imglasaña}></Tarjeta>
        <Tarjeta title="Pastel de carne" ruta={imgpastel}></Tarjeta>
      </div>
      <div className='companuncio'>
        <Anuncio titul="Anuncio Publicitario" imgen={publicidad1}></Anuncio>
        <Anuncio titul="Anuncio Publicitario" imgen={publicidad2}></Anuncio>
      </div>
    </div>
  )
}

export default App