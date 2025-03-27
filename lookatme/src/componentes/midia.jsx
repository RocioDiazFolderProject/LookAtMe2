import React from 'react';
import {Tab, Tabs, TabList} from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';


const Dia = () => {
    return (
        <div>
        <header className="midia">MI DIA</header>
        
        <div>
            <Tabs>  
                <TabList>
                    <Tab>Lunes</Tab>
                    <Tab>Martes</Tab>
                    <Tab>Miércoles</Tab>
                    <Tab>Jueves</Tab>
                    <Tab>Viernes</Tab>
                    <Tab>Sábado</Tab>
                    <Tab>Domingo</Tab>
                </TabList>
            </Tabs>
            <div className='Menu_dia'>Menú diario
                <div>
                     <Tabs>  
                        <TabList>
                            <Tab>Desayuno</Tab>
                    
                        </TabList>
                    </Tabs>
                </div>
                <div>
                     <Tabs>  
                        <TabList>
                            <Tab>Media mañana</Tab>
                    
                        </TabList>
                    </Tabs>
                </div>
                <div>
                     <Tabs>  
                        <TabList>
                            <Tab>Almuerzo</Tab>
                    
                        </TabList>
                    </Tabs>
                </div>
                <div>
                     <Tabs>  
                        <TabList>
                            <Tab>Media tarde</Tab>
                    
                        </TabList>
                    </Tabs>
                </div>
                <div>
                     <Tabs>  
                        <TabList>
                            <Tab>Merienda</Tab>
                    
                        </TabList>
                    </Tabs>
                </div>
                <div>
                     <Tabs>  
                        <TabList>
                            <Tab>Cena</Tab>
                    
                        </TabList>
                    </Tabs>
                </div>
                
            </div>
            <div>
                <div>
                     <Tabs>  
                        <TabList>
                            <Tabs>Actividades
                            <TabList>
                                
                                <Tab>hora</Tab>
                                <Tab>tiempo</Tab>
                                <Tab>deporte</Tab>
                                <Tab>actividad</Tab>
                                <Tab>metricas</Tab>
                            </TabList>
                            </Tabs>
                        </TabList>
                    </Tabs>
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Dia;