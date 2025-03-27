import React from 'react';
import logo from '../logo.ico';
import  '../index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dia from './midia';
import Mes from './mimes';
import Anual from './anual';
import Trimestre from './mitrimestre';
import Semestre from './misemestre';
import Metas from './mismetas';
import Receta from './misrecetas';
import Misdatos from './misdatos';
import Misemana from './misemana';
import Navbar from './navbar';


const Paginappal = () => {
return (
<div className='App'>
  <h1>HOLA, ME ALEGRA VERTE, COMENCEMOS</h1>
  <header>
    <div className="lg_centrar"> 
      <div className="logoizq">
        <div className="logo">
          <a><img className="logo" src={logo} alt="Logo" width="200px"/></a>
        </div>     
      </div>       
  
      <div className="usu_der">  
        <div>
          <label>Usuario:</label>
          <label>Dia de la semana: </label>
        </div>
      </div>
    
      <div>
        <h3>TU ALIMENTACIÓN ÓPTIMA ES POSIBLE</h3>
        <h3>TE AYUDO A ORGANIZARTE</h3>
        <h3>para tus compras, para tus recetas, para tus metas</h3>
      </div>
        
      <div className="plato">Plato</div>  
      <div className="metas">Metas</div>  
    </div> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/datos" element={<Misdatos />} />
        <Route path="/recetas" element={<Receta />} />
        <Route path="/dia" element={<Dia />} />
        <Route path="/semana" element={<Misemana />} />
        <Route path="/mes" element={<Mes />} />
        <Route path="/trimestre" element={<Trimestre />} />
        <Route path="/semestre" element={<Semestre />} />
        <Route path="/anual" element={<Anual />} />
        <Route path="/metas" element={<Metas />} />
      </Routes>
    </BrowserRouter>
  </header>
</div>
);
}

export default Paginappal;
