import React, { useState } from 'react';
import { useContext } from "react";
import CartContext from './CartContext';
import { Link } from 'react-router-dom';
import { sendOrder } from '../firebase/firebaseApp';
import Cartform from './Cartform';
import { Timestamp } from 'firebase/firestore/lite';


function CartView() {
    const [ orderDone, setOrderDone] = useState(false)
    const {itemCart, clear, deletItemInCart, TotalPrice} = useContext(CartContext);

    function handleSubmit(buyer) {
        let itemOrder = itemCart.map( (game) =>{
            return {id: game.id, GameName: game.GameName, cant: game.cant, Precio: game.Price}
        });
        const order ={
            "buyer": buyer,
            game: [...itemOrder],
            total: TotalPrice(),
            timestamp : Timestamp.fromDate( new Date())
        };    
        let createorden = sendOrder(order);
        createorden.then( res => setOrderDone(res));
        clear();
    }
    

    if ( orderDone ){
        return (
            <div className="container al3 al4">
                <h2>Gracias por su Compra.</h2>
                <p>Este es el ticket de compra <strong>{orderDone}</strong></p>
                <Link type="button" className="btn btn-primary" to="/"> Seguir comprando en el catalogo.</Link>
            </div>
        );}
    if ( itemCart.length === 0){
    return (
        <div className="container al3 al4">
            <h2>No HAY Juegos en su Carrito.</h2>
            <Link type="button" className="btn btn-primary" to="/"> Ir al Catalogo de juegos</Link>
        </div>
    );
    } else {
        return (
            <div className="container al2">
                <table className="table al">
                    <thead>
                        <tr>
                            <th>Juego</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="table al">
                        <tr className="tb">
                        {itemCart.map(game => {
                            return <tr key={game.id}>
                                <td>{game.GameName}</td>
                                <td>{game.Price}</td>
                                <td>{game.cant}</td>
                                <td>${(game.cant * game.Price).toFixed(2)}</td>
                                <td><button onClick={() => deletItemInCart(game.id) } className="bg-danger container mb-3 mt-3">Eliminar producto</button> </td>
                            </tr>

                            })}
                        </tr>
                    </tbody>
                </table>
                <h4 className="mb-3 al">Total: ${TotalPrice()}</h4>
                <button onClick={ clear } className="bg-info container mb-3 mt-3">Vaciar Carrito de Compra</button>
                <Cartform handleSubmit={handleSubmit} />
            </div>
        );
    }
}

export default CartView;