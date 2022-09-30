import React, {useState} from 'react'
import ItemCount from './ItemCount';
import { useContext } from "react";
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({game}) {
    let [lim, setLim] = useState(false);
    const { addItem, getItemInCart} = useContext(CartContext);
    let stocksNuevos = game.Stock;

    function onAddCar(cant){
        setLim(true);
        addItem(game, cant);
    }
    let itemInCar = getItemInCart(game.id);
    if(itemInCar){
        stocksNuevos = game.Stock - itemInCar.cant;
    }


    return (
        <div className="col-md-3 Es">
            <div className="shadow p-3 mb-5 bg-body rounded card mx-2">
                <img src={game.Imagen} alt={game.GameName} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{game.GameName}</h3>
                    { lim? 
                                (<Link to="/cart" type="button" className="fs-4 badge bg-danger container mb-3 mt-3 text-wrap d-flex">
                                    Terminar Compra
                                </Link>
                            )
                    :       (
                                <ItemCount
                                initial = {1}
                                stocks = {stocksNuevos}
                                onAddCar={onAddCar}
                                />
                            )
                    }
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p className="fs-4 badge bg-danger container mb-3 mt-3 text-wrap d-flex">
                            $ { game.Price }
                        </p>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default ItemDetail;