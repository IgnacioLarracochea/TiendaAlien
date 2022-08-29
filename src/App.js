import logo from './logo.svg';
import './App.css';
import "./components/Navbar/alien.css";
import  NavBar  from './components/Navbar/Navbar';
import {Contador} from './components/ItemCount/ItemCount'
import Carta from './components/ItemListContainer/Carta';
import Item from './components/Item/Item';




function App() {
  const onAdd = (Contador) => {
    console.log("Soy onAdd y el valor del contador es", Contador)

  }
  return(
    <div>
      <NavBar/>
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
      <Item/>
    </div> 
  
    


  )
};

export default App;

