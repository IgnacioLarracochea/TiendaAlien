import React from "react";
import { Contador } from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Item({id, title, price, stock, img}) {
    return(
      <Card style={{ width: '18rem' }}>
        <img variant="top" src={img} />
          <Card.Body>
          
              <Card.Title>{id}</Card.Title>
                <Card.Text>{title}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Contador/>
          </Card.Body>
     </Card>
    
     ) 


}


