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
          to="/" class="nav-link active">Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Category/Colgantes" Class="nav-link active">Colgantes
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Category/Aros" Class="nav-link">Aros
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Category/Set" class="nav-link">Sets
          </Link> 
        </li>
        <li class="nav-item">
          <Link to="/Artista/" class="nav-link">La Artista
          </Link> 
        </li>
        <li class="nav-item">
          <Link to="/Acerca/" class="nav-link">Acerca
          </Link> 
        </li>
        <li class="nav-item">
          <Link to = "/Contacto/" class="nav-link" >Contacto
          </Link>
          </li>
      </ul>
    </div> <CartWidget/>

  </div>
</nav>     
           
      </div>
    );
  };

export default NavBarComponent;