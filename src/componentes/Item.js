import {Link} from "react-router-dom";


const Item = ({articulo}) => {
    return( 

  <div className="containerHome">
    <img src={articulo.img}width="400" height="400"className="card-img-top" alt="..."/>
    
    <h5 class="card-title">{articulo.descripcion}</h5>
    <p class="card-text">$ {articulo.precio}</p>
    <Link to = {`/item/${articulo.id}`} className = "btn btn-primary" style= {{background: '#f48fb1', border: 'none'}}>
      Comprar</Link>
  </div>
);
};

export default Item;