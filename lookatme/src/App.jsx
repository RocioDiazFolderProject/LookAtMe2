//import logo from '../src/logo.ico';
import './App.css';
import Paginainicio from './componentes/paginainicio';  
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
     <Paginainicio/>
    </div>
  );
}

export default App;

