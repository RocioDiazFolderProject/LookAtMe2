import React from 'react';
import {Tab, Tabs, TabList} from 'react-tabs';


const Semestre = () => {    
    return (
        <div>
            <header className="misemestre">MI SEMESTRE</header>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Meses</Tab>

                        <Tab>Enero - Febrero - Marzo - Abril - Mayo - Junio</Tab>
                        <Tab>Julio - Agosto - Septiembre - Octubre - Noviembre - Diciembre</Tab>
                  

                    </TabList>
                </Tabs>
            </div>
        </div>
    );
}                   

export default Semestre;