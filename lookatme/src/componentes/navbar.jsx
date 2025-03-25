import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li><Link to="/datos">Mis Datos</Link></li>   
            <li><Link to="/recetas">Mis Recetas</Link></li>
            <li><Link to="/dia">Mi Día</Link></li>
            <li><Link to="/semana">Mi Semana</Link></li>
            <li><Link to="/mes">Mi Mes</Link></li>
            <li><Link to="/trimestre">Mi Trimestre</Link></li>
            <li><Link to="/semestre">Mi Semestre</Link></li>
            <li><Link to="/anual">Mi Año</Link></li>
            <li><Link to="/metas">Mis metas</Link></li>

        </ul>
    );
}

export default Navbar;


