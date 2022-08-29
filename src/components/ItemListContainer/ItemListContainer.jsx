import { Spinner } from '@chakra-ui/react';
import React,{useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({greeting}) {
    const [items, setItems] = useState({});

    useEffect(() => {

        let products = [{id: 1, title: "Monster Verde", price: 350}, {id: 2, title: "Seven-Up", price: 250}];
            new Promise((resolve)=>{

                setTimeout(()=>{
                    resolve(products);

                }, 2000)

            }).then((data)=>{
               setItems(data);

            })
    }, [])



    return (
         <div>
            <span>{greeting}</span>
            {items.length ?
                <ItemList items={items}/> :
                <spinner></spinner>    
        } 

         </div>



    );
}


export {ItemListContainer};
