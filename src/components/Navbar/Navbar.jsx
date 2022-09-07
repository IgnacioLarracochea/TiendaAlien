import  CardWidget  from '../ItemListContainer/CardWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light color" >
            <a className="fuente navbar-brand" id="fuente">ALIEN SHOP'S</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                    <Link className="nav-link" to='../Comida/comida' >Comidas</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='../bebidas/bebidas' >Bebidas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='../combos/combos'>Combos</Link>
                    </li>
                    <li className="nav-item">
                        <CardWidget/>
                    </li>
                </ul>
            </div>
        </nav>
        
    );
}

export default NavBar;