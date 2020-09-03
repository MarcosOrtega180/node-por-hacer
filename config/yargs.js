let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}


let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente a la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {descripcion})
    .command('actualizar', 'Actualiza un estado completo de una tarea', {descripcion, completado})
    .command('borrar', 'Borra un registro', {descripcion})
    .help()
    .argv;

module.exports = {argv};