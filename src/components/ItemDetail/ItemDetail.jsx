import React from "react";

export function ItemDetail({item}) {
    const {id, price, title, img} = item;

    return(
        <div>
            <h1>{title} - {id}</h1>
            <img src={img}></img>
            <h3>{price}</h3>


        </div>
    )
    
}