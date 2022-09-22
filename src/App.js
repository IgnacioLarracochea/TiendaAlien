import './App.css';
import "./components/Navbar/alien.css";
import  NavBar  from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';





function App() {
  return(
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="Hola,pasando"/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  
    


  )
};

export default App;

