import React,{useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { Spinner } from '@chakra-ui/react';

function ItemListContainer({greeting}) {
    const [items, setItems] = useState({});
    

    useEffect(() => {

        let products = [{id: 1, title: "Monster Verde", price: "350$", stock:"100", img:'https://www.alfonsabebidas.com.ar/database/articulos/fotos/738/Energizante%20Monster%20VERDE%20ULTRA%20PARADISE__1.jpg'}, {id: 2, title: "Seven-Up", price: "250$", stock:"100", img:'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080039_f.jpg'}];
            new Promise((resolve)=>{

                setTimeout(()=>{
                    resolve(products);

                }, 2000)

            }).then((data)=>{
               setItems(data);

            })
    }, [])



    return  (
         <div>
            <span>{greeting}</span>
            {items.length ?
                <ItemList items={items}/> :
                <Spinner/>   
            } 

         </div>



    );
}


export {ItemListContainer};
