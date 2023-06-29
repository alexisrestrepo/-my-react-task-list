import { useState } from "react";
import Tarea from "./Tarea";
import Titulo from "./Titulo";
import FormularioAñadirTarea from "./FormularioAñadir";
import { crearTarea, eliminarTarea } from "../utilidades/utilidadesTareas";




const busquedaDeTarea = localStorage.getItem("tarea");

export default function ListaDeTareas(){
    const baseDeDatos = JSON.parse(busquedaDeTarea ? busquedaDeTarea : "[]"  );
    const [tareas, setTarea]= useState(baseDeDatos);
    const anadirTarea= (tarea)=>crearTarea(tarea, tareas, setTarea);
    const manejarEliminarTarea = (id)=> eliminarTarea (id, tareas, setTarea);
    return(

        <div>
            <Titulo content="lista de tareas"></Titulo>
            <ul>
            <FormularioAñadirTarea eventoCrearTarea={anadirTarea}> </FormularioAñadirTarea>
            {!tareas.length > 0 ? "no hay que  mostrar" : tareas.map ((tarea, index)=>
            <Tarea eventoBorrar = {manejarEliminarTarea} tarea = {tarea} key ={index}></Tarea>
            
            
            
            )}
           </ul>
        </div>
    )
}
