

export const crearTarea = (tarea, ListaDeTareas, añadirTarea) =>{
    tarea.id = ListaDeTareas.length;
    const tareaActual =[...ListaDeTareas, tarea]
    añadirTarea(tareaActual);
    localStorage.setItem( "tarea", JSON.stringify(tareaActual))
}

export const eliminarTarea = (id, ListaDeTareas, borrarTarea) => {
    const filtrarTarea = ListaDeTareas.filter((tarea) => tarea.id !== id);
    const tareaCorriente = [...filtrarTarea];
    borrarTarea(tareaCorriente);
    localStorage.setItem( "tarea", JSON.stringify(tareaCorriente))
}