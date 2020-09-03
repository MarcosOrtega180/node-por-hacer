const fs = require('fs');

let listadoPorHacer = [];

//este comando persiste los registros en un archivo .joson
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error('No se puede grabar: '+err);
        }
        // else resolve(`Los datos han sido almacenados`);
    });
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
};
const borrar = (descripcion)=>{
    cargarDb();
    let lista2 = listadoPorHacer.filter(item =>item.descripcion!==descripcion);
    if(lista2.length<listadoPorHacer.length){
        listadoPorHacer=lista2;
        guardarDB();
        return true;
    }else{
        return false;
    }
};
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}