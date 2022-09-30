import { bd } from "./firebaseApp";
import { collection, setDoc, doc } from "firebase/firestore/lite";

const ApDatos = [
        {
        "idOld": 1,
        "Price": 999,
        "GameName": "Call of Duty: Black Ops 3",
        "Categoria": "Shooter",
        "Stock": 49,
        "Imagen": "./Imagenes/call-of-duty.webp",
    }, {
        "idOld": 2,
        "Price": 759,
        "GameName": "Counter Strike: Global Ofensive",
        "Categoria": "Shooter",
        "Stock": 71,
        "Imagen": "./Imagenes/counter.webp",
    }, {
        "idOld": 3,
        "Price": 2499,
        "GameName": "Red Dead Redemption II",
        "Categoria": "Shooter",
        "Stock": 30,
        "Imagen": "./Imagenes/red-dead.jpg",
    }, {
        "idOld": 4,
        "Price": 1999,
        "GameName": "Day Z",
        "Categoria": "Survival",
        "Stock": 80,
        "Imagen": "./Imagenes/day-z.jpg",
    }, {
        "idOld": 5,
        "Price": 224,
        "GameName": "The Forest",
        "Categoria": "Survival",
        "Stock": 68,
        "Imagen": "./Imagenes/forest.webp",
    }, {
        "idOld": 6,
        "Price": 2440,
        "GameName": "Rust",
        "Categoria": "Survival",
        "Stock": 3,
        "Imagen": "./Imagenes/rust.webp",
    }, {
        "idOld": 7,
        "Price": 5499,
        "GameName": "Fife 2022",
        "Categoria": "Deportes",
        "Stock": 21,
        "Imagen": "./Imagenes/fifa.jpg",
    }, {
        "idOld": 8,
        "Price": 4019,
        "GameName": "NBA2K 2022",
        "Categoria": "Deportes",
        "Stock": 67,
        "Imagen": "./Imagenes/nba.webp",
    }, {
        "idOld": 9,
        "Price": 3599,
        "GameName": "Forza Horizon 5",
        "Categoria": "Deportes",
        "Stock": 85,
        "Imagen": "./Imagenes/forzahorizon.jpg",
    }
    ]

async function dataFirebase() {
      ApDatos.forEach((game) => {
          const newGame = doc(collection(bd, "games"));

          setDoc(newGame, game).then(() => {
              console.log("Document written with idOld", newGame.id)
          }).catch(err =>{
              console.error("Error adding document: ", err);
          })
      })
}

  export default dataFirebase;