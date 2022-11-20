import {Link} from "react-router-dom"
import CartWidget from "./CartWidget";



const NavBarComponent =()=> {
    return(
      <div ClassName="NavBar">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img class="navbar-brand" src= "/imagenes/logo.png" alt="logo"width={"150px"}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link
          to="/" class="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link
          to="/Category/" class="nav-link">Categorias
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