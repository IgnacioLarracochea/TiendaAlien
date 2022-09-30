import React, {useState, useEffect } from 'react'; // React.useState ponerlo en la funcion  mientras importo react es lo mismo
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getAllGamesDet } from "../firebase/firebaseApp"


/*const ApDatos = [{
    "id": 1,
    "Price": 999,
    "GameName": "Call of Duty: Black Ops 3",
    "Stock": 49,
    "Imagen": "/Imagenes/call-of-duty.webp",
  }, {
    "id": 2,
    "Price": 759,
    "GameName": "Counter Strike: Global Ofensive",
    "Stock": 71,
    "Imagen": "/Imagenes/counter.webp",
  }, {
    "id": 3,
    "Price": 2499,
    "GameName": "Red Dead Redemption II",
    "Stock": 30,
    "Imagen": "/Imagenes/red-dead.jpg",
  }, {
    "id": 4,
    "Price": 1999,
    "GameName": "Day Z",
    "Stock": 80,
    "Imagen": "/Imagenes/day-z.jpg",
  }, {
    "id": 5,
    "Price": 224,
    "GameName": "The Forest",
    "Stock": 68,
    "Imagen": "/Imagenes/forest.webp",
  }, {
    "id": 6,
    "Price": 2440,
    "GameName": "Rust",
    "Stock": 3,
    "Imagen": "/Imagenes/rust.webp",
  }, {
    "id": 7,
    "Price": 5499,
    "GameName": "Fife 2022",
    "Stock": 21,
    "Imagen": "/Imagenes/fifa.jpg",
  }, {
    "id": 8,
    "Price": 4019,
    "GameName": "NBA2K 2022",
    "Stock": 67,
    "Imagen": "/Imagenes/nba.webp",
  }, {
    "id": 9,
    "Price": 3599,
    "GameName": "Forza Horizon 5",
    "Stock": 85,
    "Imagen": "/Imagenes/forzahorizon.jpg",
  }] //Con mockaroo una app para construir items.*/

export default function ItemDetailContainer(props) {
    const { id } = useParams();
    const [game, setGame] = useState([]);

    /*let solicitud = new Promise((resolve) => {

        setTimeout( () => {
                const itemRequerido = ApDatos.find(game =>{
                    return game.id === Number(id);
                })
                resolve(itemRequerido);  
        }, 2000);
    });*/

    useEffect( () =>{
      let solicitud = getAllGamesDet(id);

        solicitud.then( (datosRespuesta) => {
            setGame(datosRespuesta);
        }).catch((errorReject) =>{
          console.log(errorReject);
      })

    },[id]);

    return (
        <div>
          <h1 className="text-success container mb-3">{props.greeting}</h1> 
          <div className="container mb-3 Es-width">  
            { game?      
                <ItemDetail game = {game} />
            
            :
            
              <h3>Loading...</h3>
            }
          </div> 
        </div>// game es distinto al game que guarde en la variable const, solo que se puede usar el mismo nombre.
    );
}