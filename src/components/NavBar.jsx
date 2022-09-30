import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5 px-5">
            <div className="container-fluid">
              <Link className="navbar-brand al al4" to="/">GameARG</Link>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-Link al al4" to="/category/Shooter">Shooter</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link al al4" to="/category/Deportes">Deportes</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link al al4" to="/category/Survival">Survival</Link>
                  </li>
                  <li className="nav-item al al4">
                    <CartWidget/>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}

export default NavBar;