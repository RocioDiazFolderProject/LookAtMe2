import React from 'react';

const Misdatos = () => {
    return (
        <div className="misdatos"> 
        <header className="header_datos">MIS DATOS</header>
            <div> 
                <form className = "form_datos" action="">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" />
                    <label htmlFor="">Edad:</label>
                    <input type="text" />
                    <label htmlFor="">Peso:</label>
                    <input type="text" />
                    <label htmlFor="">Estatura:</label>
                    <input type="text" />
                    <button className='btn_guardar'>Guardar</button>
                </form>
               
            </div>
       
        </div>
    );
}

export default Misdatos;