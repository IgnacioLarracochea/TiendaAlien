import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from "../ItemDetail/ItemDetail"

export function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        let products = [{id: "1", title: "Monster Verde", price: "350$", stock:"100", img:'https://www.alfonsabebidas.com.ar/database/articulos/fotos/738/Energizante%20Monster%20VERDE%20ULTRA%20PARADISE__1.jpg'}, {id: "2", title: "Seven-Up", price: "250$", stock:"100", img:'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080039_f.jpg'}];
        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(products.find((element)=> element.id == id));
            }, 2000)    
        }) .then((data)=>{
            setItem(data);

        })
        
        
        
        
        
    }, [id])


    return(
        <>
        { Object.keys(item).length && <ItemDetail item={item}/>}
        </>
    )
    
};
