import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Anuncio from './Anuncio/anuncio'
import Secundaria from './Seccsecundaria/secundaria'
import Tarjeta from './Tarjeta/tarjeta'
import Principal from './tituloprincipal/tprincipal'


function App() {
  
  return (
    <div className="App">
      <Principal nombre="RESTAURANT  THE HAPPY TABLE" info="Ofrecemos una amplia variedad de platillos preparados con los mejores ingredientes frescos y locales, desde ensaladas frescas hasta suculentas carnes y mariscos."></Principal>
      <div className="secsecundaria flex-container">
        <Secundaria title="Pollo al horno" ruta="./src/assets/pollo.png" descripcion=" Un pollo tierno y jugoso con una deliciosa mezcla de hierbas frescas y limón." ></Secundaria>
        <Secundaria title="Ensalada de quinoa" ruta="./src/assets/ensalada.png" descripcion=" Una ensalada fresca y saludable hecha con quinoa cocida, aguacate, tomate, cebolla roja y cilantro." ></Secundaria>
        <Secundaria title="Sopa con queso parmesano" ruta="./src/assets/sopa.png" descripcion="Una sopa cremosa y reconfortante hecha con tomates asados y queso parmesano rallado." ></Secundaria>
        <Secundaria title="Pescado a la plancha" ruta="./src/assets/pescado.png" descripcion="Pescado a la plancha con una salsa de cilantro fresca y picante con limón."></Secundaria>
        <Secundaria title="Lasaña vegetariana" ruta="./src/assets/lasaña.png" descripcion="Una lasaña vegetariana llena de espinacas frescas y queso ricotta cremoso."></Secundaria>
        <Secundaria title="Pastel de carne" ruta="./src/assets/pastel.png" descripcion="Un pastel de carne tradicional hecho con carne molida sazonada y cubierto con puré de papas cremoso y gravy caliente."></Secundaria>
      </div>
      <div className='comptarjeta '>
        <Tarjeta title="Pollo al horno" ruta="./src/assets/pollo.png"></Tarjeta>
        <Tarjeta title="Ensalada de quinoa" ruta="./src/assets/ensalada.png"></Tarjeta>
        <Tarjeta title="Sopa con queso parmesano" ruta="./src/assets/sopa.png"></Tarjeta>
        <Tarjeta title="Pescado a la plancha" ruta="./src/assets/pescado.png" ></Tarjeta>
        <Tarjeta title="Lasaña vegetariana" ruta="./src/assets/lasaña.png"></Tarjeta>
        <Tarjeta title="Pastel de carne" ruta="./src/assets/pastel.png"></Tarjeta>
      </div>
      <div className='companuncio'>
        <Anuncio titul="Anuncio Publicitario" imgen="./src/assets/publicidad1.png"></Anuncio>
        <Anuncio titul="Anuncio Publicitario" imgen="./src/assets/publicidad2.png"></Anuncio>
      </div>
    </div>
  )
}

export default App