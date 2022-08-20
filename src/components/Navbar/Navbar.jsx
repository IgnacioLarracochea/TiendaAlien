import  CardWidget  from '../ItemListContainer/CardWidget';



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
                    <a className="nav-link" to='../snacks/snacks' >Comidas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" to='../bebidas/bebidas' >Bebidas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to='../combos/combos'>Combos</a>
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