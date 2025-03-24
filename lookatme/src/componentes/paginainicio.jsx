import logo from '../logo.ico';
import Paginappal from './paginappal';


const Paginainicio = () => {
    return (
        <div>
             <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LookAtMe - lleva tus métricas y progresos a un click

        </p>
        
          <a> IMC</a>
          <a> Ingestas/Hidratación</a>
          <a> Menus</a>
          <a> Actividades(alto rendimiento/otros)</a>
        
      </header>
      <Paginappal/>
        </div>
        
    );
};

export default Paginainicio;