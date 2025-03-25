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
<h3>


<div className='App'>
 
 <h1>HOLA, ME ALEGRA VERTE, COMENCEMOS</h1>
 <header>
 <div className="lg_centrar"> 
    <div className="logoizq">
            <div className="logo">
            <a><img src ={logo} alt="" width="80"/></a>
           </div>     
    </div>       
  
  <div className ="usu_der">  
            <div>
              <a>Usuario: Andrea</a>
              <a>Dia de la semana: </a>
            </div>
           
    </div>
    
    <div>
      <h1>TU ALIMENTACIÓN ÓPTIMA ES POSIBLE</h1>
      <h1>TE AYUDO A ORGANIZARTE</h1>
      <h1>para tus compras, para tus recetas, para tus metas</h1>
    </div>
        
    <div className = "plato">Plato</div>  
    <div className = "metas">Metas</div>  
    </div> 
<BrowserRouter>
    <Navbar />
    <Routes>
        
        <Route  path="/datos" element={<Misdatos />}></Route>
        <Route  path="/recetas" element={<Receta />}></Route>
        <Route  path="/dia" element={<Dia />}></Route>
        <Route  path="/semana" element={<Misemana />}></Route>
        <Route  path="/mes" element={<Mes />}></Route>
        <Route  path="/trimestre" element={<Trimestre />}></Route>
        <Route  path="/semestre" element ={<Semestre />}></Route>
        <Route  path="/anual" element={<Anual />}></Route>
        <Route  path="/metas" element={<Metas />}></Route>
        

    </Routes>

</BrowserRouter>
  </header>
  
  
</div>
  </h3>
  
  );
}

export default Paginappal;
