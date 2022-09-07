import logo from './logo.svg';
import './App.css';
import "./components/Navbar/alien.css";
import  NavBar  from './components/Navbar/Navbar';
import Carta from './components/ItemListContainer/Carta';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';





function App() {
  const onAdd = (Contador) => {
    console.log("Soy onAdd y el valor del contador es", Contador)

  }
  return(
    <div>
      <Router><NavBar/></Router>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Carta/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ItemListContainer/>
    </div> 
  
    


  )
};

export default App;

