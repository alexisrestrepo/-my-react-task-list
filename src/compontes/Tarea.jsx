export default function Tarea ({tarea, eventoBorrar}){
    return(

        <li>
<h2>{tarea.titulo} </h2>
<p> {tarea.contenido} </p>
<p> completar: {tarea.completar ? "si" : "no"} </p>
<button onClick={() => eventoBorrar(tarea.id)}>borrar</button>
        </li>
    )
}