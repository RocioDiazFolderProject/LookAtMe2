import React from 'react';
import {Tab, Tabs, TabList} from 'react-tabs';


const Trimestre = () => {
    return (
        
         <div>
                 <h1>
                 <header className="mitrimestre">MI TRIMESTRE</header>
                     
                                   <div>
                                       <Tabs>  
                                           <TabList>
                                               <Tab>Meses</Tab>
                                                 
                                                <Tab>Enero - Febrero - Marzo</Tab>
                                                <Tab>Abril - Mayo - Junio</Tab>
                                                <Tab>Julio - Agosto - Septiembre</Tab>
                                                <Tab>Octubre - Noviembre - Diciembre</Tab>
                                               
                                               </TabList>
                                         </Tabs>
                                   </div>
                 </h1>
                </div>
    );
}   

export default Trimestre;