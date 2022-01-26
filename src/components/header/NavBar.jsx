import './NavBar.css';
import CartWidjet from './CartWidget';


function NavBar() {
  return (
    <div className="header">
      <div className="header-section container">
        <a className="logo" href="">
          Nutherbs.com
        </a>
        <ul>
            <li><a href=""></a>Nosotros</li>
            <li><a href=""></a>Productos</li>
            <li><a href=""></a>Contacto</li>
            
        </ul>
        {CartWidjet()}    
      </div>
    </div>
  );
}

export default NavBar;
