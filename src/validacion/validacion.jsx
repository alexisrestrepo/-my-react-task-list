import { useState } from "react";

export default function() {
const [formValues, setformValues]= useState({
    titulo:"",
    contenido:"",
});
const [formError, setformError]= useState({
    titulo:"",
    contenido:"",
});

const isValid = Object.values(formError).every(value => value.length === 0);

const onSubmit = (e) =>{
    e.preventdefault();
    console.log("datos enviados correctamente");
    console.log(formValues.titulo); 
    console.log(formValues.contenido); 
}
const onChangeTitulo = (e) => {
    const titulo = e.target.value;
    let error = "";
    if(titulo.length < 3) error = "debe contener mas caracteres";
    else error ="";

    setformValues({...formValues, titulo});
    setformError({...formError, titulo: error});
}
return(
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Titulo" value={formValues.titulo} onChange={onChangeTitulo} />

        <span>error: {formError.titulo} </span>

        <input type="text" placeholder="contenido" value={formValues.contenido} onChange={(e)=> setformValues
        ({...formValues, contenido: e.target.value})} />
        <button type="submit" disabled ={!isValid}>enviar</button>

    </form>)};