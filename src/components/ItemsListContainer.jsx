import React, {useState, useEffect } from 'react'; // React.useState ponerlo en la funcion  mientras importo react es lo mismo
import Itemslist from './Itemslist';
import { useParams } from 'react-router-dom';
import {getAllGames, getAllGamesFunc} from "../firebase/firebaseApp"


/*const ApDatos = [{
    "id": 1,
    "Price": 999,
    "GameName": "Call of Duty: Black Ops 3",
    "Categoria": "Shooter",
    "Stock": 49,
    "Imagen": "/Imagenes/call-of-duty.webp",
  }, {
    "id": 2,
    "Price": 759,
    "GameName": "Counter Strike: Global Ofensive",
    "Categoria": "Shooter",
    "Stock": 71,
    "Imagen": "/Imagenes/counter.webp",
  }, {
    "id": 3,
    "Price": 2499,
    "GameName": "Red Dead Redemption II",
    "Categoria": "Shooter",
    "Stock": 30,
    "Imagen": "/Imagenes/red-dead.jpg",
  }, {
    "id": 4,
    "Price": 1999,
    "GameName": "Day Z",
    "Categoria": "Survival",
    "Stock": 80,
    "Imagen": "/Imagenes/day-z.jpg",
  }, {
    "id": 5,
    "Price": 224,
    "GameName": "The Forest",
    "Categoria": "Survival",
    "Stock": 68,
    "Imagen": "/Imagenes/forest.webp",
  }, {
    "id": 6,
    "Price": 2440,
    "GameName": "Rust",
    "Categoria": "Survival",
    "Stock": 3,
    "Imagen": "/Imagenes/rust.webp",
  }, {
    "id": 7,
    "Price": 5499,
    "GameName": "Fife 2022",
    "Categoria": "Deportes",
    "Stock": 21,
    "Imagen": "/Imagenes/fifa.jpg",
  }, {
    "id": 8,
    "Price": 4019,
    "GameName": "NBA2K 2022",
    "Categoria": "Deportes",
    "Stock": 67,
    "Imagen": "/Imagenes/nba.webp",
  }, {
    "id": 9,
    "Price": 3599,
    "GameName": "Forza Horizon 5",
    "Categoria": "Deportes",
    "Stock": 85,
    "Imagen": "/Imagenes/forzahorizon.jpg",
  }] //Con mockaroo una app para construir items.

function datos(categoryid) {
    return new Promise((resolve, reject) => {

        setTimeout( () => {
            if(categoryid === undefined) {
                resolve(ApDatos);
            } else {
                const categoryRequerido = ApDatos.filter( game =>{
                  return game.Categoria === categoryid;
                })
                resolve(categoryRequerido);
            }
        }, 2000);
    })
}// Promesa fuera del componente (las dos formas son validas)*/


export default function ItemsListContainer({greeting}) {
    const [games, setGame] = useState([]);  //Asi guardo un array vacio.
    let { categoryid } = useParams();

    useEffect( () =>{
        const resu =  categoryid ? getAllGamesFunc(categoryid) : getAllGames();
        resu.then(itemsProm => {
          console.log(itemsProm);
          setGame(itemsProm)
        }).catch((errorReject) =>{
          console.log(errorReject);
      })
        
        /*solicitud.then( (datosRespuesta) => {
            setGame(datosRespuesta);
        }).catch((errorReject) =>{
            console.log(errorReject);
        })*/
    },[categoryid]); // Con el useEffect evito que se cree un bucle infinito la mayoria de las veces.


    return (
      <div>
      <h1 className="text-success container mb-3">{greeting}</h1> 
      <div className="container mb-3 Es-width">       

      <Itemslist game = {games} />
      </div>
  </div>// game es distinto al game que guarde en la variable const, solo que se puede usar el mismo nombre.
    );
}