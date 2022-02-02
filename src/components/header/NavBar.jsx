import './NavBar.css';
import CartWidjet from './CartWidget';
import {NavLink} from 'react-router-dom'


function NavBar() {
  return (
    <div className="header">
      <div className="header-section container">
        <NavLink to="/" className="logo">
          Nutherbs.com
        </NavLink>
        <ul className='ulNavbar'>
            <li>
              <NavLink
               to="/category/salud natural">
                 Salud Natural
                 </NavLink>
            </li>
            <li>
              <NavLink to="/category/bajar de peso">Bajar de Peso</NavLink>
            </li>
            <li>
              <NavLink to="/category/energizantes">Energizantes</NavLink>
            </li>
           
            
        </ul>
        <li>
              <NavLink to="/carrito" >
              <CartWidjet />
              </NavLink>
            </li>
            
      </div>
    </div>
  );
}

export default NavBar;
