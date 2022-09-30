import { initializeApp } from "firebase/app";
import { getFirestore , query, where, getDocs, getDoc, doc, collection, addDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);

export const bd = getFirestore (app);

export async function getAllGames(){
  const myCollection = collection ( bd, "games");
  const NameGameSnapp = await getDocs(myCollection);

  const res = NameGameSnapp.docs.map( game =>{
    return {...game.data(), id: game.id }
  });

  return res;
}

export async function getAllGamesFunc(category){
  const myCollection = collection ( bd, "games");
  const Query = query(myCollection, where("Categoria", "==", category))

  const NameGameSnapp = await getDocs(Query);

  const res = NameGameSnapp.docs.map( game =>{
    return {...game.data(), id: game.id }
  });

  return res;
}

export async function getAllGamesDet(id){
  const myCollection = collection ( bd, "games");
  const docref = doc(myCollection, id); //ref es como la "referencia" a un documento.
  const resDoc = await getDoc(docref);
  return {...resDoc.data(), id: resDoc.id}
}

export async function sendOrder(orderData){
  const myCollection = collection( bd, "orders");
  const orderDoc = await addDoc(myCollection, orderData);
  console.log(orderDoc.id);
  return orderDoc.id;
}