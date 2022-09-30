import { useState, createContext  } from 'react';

const CartContext = createContext();

export function CartContextProvider({children}) {
    const [itemCart, setItemCart] = useState([]);

    function addItem(game, cant){
        if (isItemInCart(game.id)) { 
            let index = itemCart.findIndex(i => i.id === game.id);
            let copyCarts = [...itemCart];
            copyCarts[index].cant += cant;
            setItemCart(copyCarts);
        } else {
            const itemToAdd = {...game, cant};
            setItemCart([...itemCart, itemToAdd]);
        }
    }
    function isItemInCart(id){
        return itemCart.some(CI => CI.id === id);
    }

    function getItemInCart(id){
        return itemCart.find(CI => CI.id === id);
    }

    function deletItemInCart(idD){
        setItemCart(itemCart.filter(game => game.id !== idD));
    }

    function clear(){
        setItemCart([]);
    }

    function countCart() {
        let TotalGame = 0;
        itemCart.forEach( game => TotalGame += game.cant);
        return TotalGame;
    }

    function TotalPrice(){
        let Totalprice = 0;
        itemCart.forEach( game => Totalprice += game.cant * game.Price);
        return Totalprice;
    }

    return (
        <CartContext.Provider value={ {addItem, itemCart, clear, getItemInCart, deletItemInCart, countCart, TotalPrice} }>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;