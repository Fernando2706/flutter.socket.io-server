
const { io } =require("../index");


io.on('connection', client => {
    console.log("CLiente Conectado");


    client.on('disconnect', () => { console.log("Cliente Desconectado");});


    client.on('mensaje',(payload)=>{

        io.emit('mensaje',{admin:'Nuevo Mensaje'});

    });


  });
