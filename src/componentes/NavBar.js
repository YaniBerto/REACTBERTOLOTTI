import {Link} from "react-router-dom"
import CartWidget from "./CartWidget";
import Logo from "../imagenes/logo.png";



const NavBarComponent =()=> {
    return(
      <div ClassName="NavBar">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img className="navbar-brand" src= {Logo} alt="logo"width={"150px"}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link
          to="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link
          to="/Category/Colgantes" ClassName="nav-link active">Colgantes
          </Link>
        </li>
        <li class="nav-item">
          <Link
          to="/Category/Aros" ClassName="nav-link">Aros
          </Link>
        </li>
        <li class="nav-item">
          <Link 
          to="/itemDetailContainer"
          class="nav-link">Articulos
          </Link> 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Contacto.js">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>     
            <CartWidget/>
      </div>
    );
  };

export default NavBarComponent;