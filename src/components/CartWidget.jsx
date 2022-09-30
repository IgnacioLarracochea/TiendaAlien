import React from 'react'
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import CartContext from './CartContext';

function CartWidget() {
    const { countCart } = useContext(CartContext);
    return (
        <div className="d-flex">
            <Link className="px-2" to="/cart">
                <Cart/>
            </Link>
            {
                countCart()> 0 && <small>{countCart()}</small> // eso lo comento por que no me lo toma por lo del NaN.
            }
        </div>
    );
}

export default CartWidget;