import logo from './logo.svg';
import './App.css';
import "./components/Navbar/alien.css";
import  NavBar  from './components/Navbar/Navbar';
import {Contador} from './components/ItemListContainer/contador'
import Carta from './components/ItemListContainer/Carta';




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
      <Contador stock={5} initial={1} onAdd={onAdd}/>
    </div> 
  
    


  )
};

export default App;

