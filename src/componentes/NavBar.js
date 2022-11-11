import CartWidget from "./CartWidget";

const NavBar=()=>{
    return(
      <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img class="navbar-brand" src="../imagenes/logo.png" alt="logo"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Acerca.js">Acerca de nuestros productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Productos.js">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Artista.js">La Artista</a>
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

export default NavBar;