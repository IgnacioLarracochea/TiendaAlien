import React from 'react'
import Item from './Item';

function Itemslist({game}) {
    return (
        <>
            {game.map( (item) =>{
                return <Item key={item.id}
                             id={item.id}
                             GameName={item.GameName}
                             Price={item.Price}
                             Stock={item.Stock}
                             Imagen={item.Imagen}
                />
            })}
        </>
    );
}

export default Itemslist;