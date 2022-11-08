import CartWidget from "./CartWidget";

const NavBar=()=>{
    return(
      <div>
        <ul className="NavBar">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
          
        </ul>
            <CartWidget/>
      </div>
    );
  };

export default NavBar;