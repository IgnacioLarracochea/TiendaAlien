import React from 'react';
import Item from '../Item/Item';
import { Flex } from '@chakra-ui/react';

const ItemList = ({items}) => {
    return (
        <Flex flexDirection="column">
            {items.map((items, indx )=>
                <Item key={indx} id={items.id} title={items.title} price={items.price}/>
                )}
        </Flex>
    );

} 

export default ItemList;