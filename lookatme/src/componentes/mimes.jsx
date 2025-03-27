import React from 'react';
import {Tab, Tabs, TabList} from 'react-tabs';
const Mes = () => {
    return (
        <div>
         <h1>
            <header className="mimes">MI MES</header>
             
                           <div>
                               <Tabs>  
                                   <TabList>
                                       <Tab>Meses</Tab>
                                         
                                        <Tab>Enero</Tab>
                                        <Tab>Febrero</Tab>
                                        <Tab>Marzo</Tab>
                                        <Tab>Abril</Tab>
                                        <Tab>Mayo</Tab>
                                       <Tab>Junio</Tab>
                                       <Tab>Julio</Tab>
                                       <Tab>Agosto</Tab>
                                       <Tab>Septiembre</Tab>
                                       <Tab>Octubre</Tab>
                                       <Tab>Noviembre</Tab>
                                       <Tab>Diciembre</Tab>
                                       
                                       </TabList>
                                 </Tabs>
                           </div>
         </h1>
        </div>
    );
}

export default Mes;