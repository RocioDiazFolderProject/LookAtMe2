import logo from '../src/logo.ico';
import './App.css';

//req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

//para conectarnos desde routes lo hacemos 
//con el siguiente código:
//const express = require('express');
//const app = express()

//ROUTES
//const routes = require('./routes/index.routes');
//app.use('/', routes);

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
