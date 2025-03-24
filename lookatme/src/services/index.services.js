//construir el controlador
//será un objecto exportable
const controller ={};
controller.index = (req, res) => {
   res.send('Hello World');
   };
module.exports = controller;