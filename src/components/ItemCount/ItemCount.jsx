import { useState } from "react";


export const Contador = ({stock, initial = 1, onAdd }) => {
const [boton, setBoton] = useState(0)

const aumentarContador = ()=>{
    if(boton < stock) setBoton(boton + 1);
};



    return (
        <>
        <button onClick={()=>{setBoton(boton -1)}} disabled={boton === initial}> - </button>
        <span>{boton}</span>
        <button onClick={aumentarContador}>+</button>
        <div><button disabled={boton === 1} onClick={()=>{onAdd(boton)}}>Agregar al carrito</button></div>
    </>
        
    );
};
