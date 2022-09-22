import React from "react";
import { Contador } from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function Item({id, title, price, stock, img}) {
  return (

    <Card style={{ width: '18rem', margin: "50px", marginTop: "100px"}}>
      
      <img variant="top" src={img} alt="" />
      
      <Card.Body>
        <Link to={`/item/${id}`}>
        <Card.Title>{id}</Card.Title>
        </Link>
        <Card.Text>{title}</Card.Text>
        <Card.Text>{stock}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Contador stock={100} initial={0} />
      </Card.Body>
    </Card>
    
  );
}





