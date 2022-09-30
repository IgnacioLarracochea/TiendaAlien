import ItemsListContainer from "./components/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartView from "./components/CartView";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemsListContainer greeting="Productos"/>} />
            <Route path="/category/:categoryid" element={<ItemsListContainer greeting="Categoria de productos"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle"/>} />
            <Route path="/Cart" element={<CartView greeting="Carrito"/>} />
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
  );
}


export default App;
