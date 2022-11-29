import {Link} from "react-router-dom";
import count from "./itemCount";


const Item = ({articulo}) => {
    return( 
     
        <div className="card">
        <li>{articulo.Descripcion}</li>
        <div style={{width: '18rem'}} class="card" />
  <img src={articulo.img} className="card-img-top" alt="..."/>
  <div class="card-body"/>
    <h5 class="card-title">{articulo.Descripcion}</h5>
    <p class="card-text">{articulo.Precio}</p>
    <div class="number">
	<button className="handleDecrement">-</button>
	<h1>{count}</h1>
	<button class="handleAdd">+</button>
</div>
    <Link to = {`/item/${articulo.id}`} className = "btn btn-primary">Comprar</Link>
  </div>

);
};

export default Item;