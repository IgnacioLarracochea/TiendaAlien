import { useState } from "react";


export const Contador = ({stock, initial = 1, onAdd }) => {
const [Contador, setContador] = useState(0)

const aumentarContador = ()=>{
    if(Contador < stock) setContador(Contador + 1);
};



    return (
        <>
        <button onClick={()=>{setContador(Contador -1)}} disabled={Contador === initial}> - </button>
        <span>{Contador}</span>
        <button onClick={aumentarContador}>+</button>
        <div><button disabled={Contador === 1} onClick={()=>{onAdd(Contador)}}>Agregar al carrito</button></div>
    </>
        
    );
};
