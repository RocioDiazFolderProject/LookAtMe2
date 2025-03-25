import logo from '../logo.ico';
import index from '../index.css';
import {Link} from 'react-router-dom';


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

  <ul>
      <li>
          {/*<a href="">Mis Datos</a>*/}
          <Link to="/src/componentes/misdatos.jsx">Mis Datos</Link>

      </li>
      <li>
          {/*<a href="">Mis Recetas</a>*/}
          <Link to="/src/componentes/misrecetas.jsx">Mis Recetas</Link>
          
      </li>
      <li>
          {/*<a href="">Mi Día</a>*/}
            <Link to="/src/componentes/midia.jsx">Mi Día</Link>
      </li>
      <li>
          {/*<a href="">Mi Semana</a>*/}
            <Link to="/src/componentes/misemana.jsx">Mi Semana</Link>
      </li>
      <li>
          {/*<a href="">Mi Mes</a>*/}
          <Link to="/src/componentes/mimes.jsx">Mi Mes</Link>
      </li>
      <li>
         {/* <a href="">Mi Trimestre</a>*/}
          <Link to="/src/componentes/mitrimestre.jsx">Mi Trimestre</Link>   
      </li>
      <li>
          {/*<a href="">Mi Semestre</a>*/}
          <Link to="/src/componentes/misemestre.jsx">Mi Semestre</Link>
      </li>
      <li>
          {/*<a href="/">Mi Año</a>*/}      
            <Link to="/src/componentes/miano.jsx">Mi Año</Link>
      </li>
      <li>
          {/*<a href="">Mis metas</a>*/}
          <Link to="/src/componentes/mismetas.jsx">Mis metas</Link>
      </li>
  
  </ul>

  </header>
  
  
</div>
  </h3>
  
  );
}

export default Paginappal;
