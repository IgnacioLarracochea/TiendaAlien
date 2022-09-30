import React, {useState} from 'react';

export default function ItemCount({initial, stocks, onAddCar}) {
    const [count, setCount] = useState(initial);

    function ResSum(){
        if(count > 1) {
            setCount(count - 1);
        }
    }
    
    function SumRes(){
        if(count < stocks) {
            setCount(count + 1);
        }
    }

    return (
        <div style={{"maxWidth": "480px"}} className="container">
            <h2>Stock</h2>
            <button onClick={ResSum} className="fs-4 badge bg-danger text-wrap">
                <i className="bi bi-chevron-left"> - </i>
            </button>
            <span className="my-auto px-5">{count}</span>
            <button onClick={SumRes} className="fs-4 badge bg-danger text-wrap">
                <i className="bi bi-chevron-right"> + </i>
            </button>
            <button onClick={ ()=>onAddCar(count) } className="bg-success container mb-3 mt-3">
                Agregar al carrito
            </button>
            <small className="text-muted mt 2">Stock disponible: { stocks } </small>
        </div>
    );
}