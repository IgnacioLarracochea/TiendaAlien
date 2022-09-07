import React from 'react';
import Item from '../Item/Item';


const ItemList = ({items}) => {
    return (
        <>
            {items.map((items, indx )=>
                <Item key={indx} id={items.id} title={items.title} price={items.price} img={items.img}/>
                )}
        </>
    );

} 

export default ItemList;