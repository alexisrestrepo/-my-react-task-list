import { useState } from "react";
import { TareaModelo } from "../modelos/tareamodelo";



export default function FormularioAñadirTarea({eventoCrearTarea}){
    const [titulo, setTitulo] = useState ("");
    const [ contenido, setContenido] = useState("");
    const onSubmit = (e)=> {
        e.preventDefault();
        const tarea = new TareaModelo (0, titulo, contenido, false);
        eventoCrearTarea(tarea);
        setTitulo("");
        setContenido("");
   
    }
              return (
            <form onSubmit={onSubmit}>
                <input type="texto" posicion="establecer titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <input type="texto" posicion="establecer titulo" value={contenido} onChange={(e) => setContenido(e.target.value)} />
                <button type="submit">Añadir</button>
           </form>
            )
    }

    
