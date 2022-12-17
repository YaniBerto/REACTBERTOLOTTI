import {Link} from "react-router-dom";


const Item = ({articulo}) => {
    return( 

  <div className="card">
    <img src={articulo.img} style={{width: '350px', height: '350px'}} className="card-img-top" alt="..."/>
  <div class="card-body"/>
    <h5 class="card-title">{articulo.descripcion}</h5>
    <p class="card-text">$ {articulo.precio}</p>
    <Link to = {`/item/${articulo.id}`} className = "btn btn-primary" style= {{background: '#f48fb1', border: 'none'}}>Comprar</Link>

</div>
);
};

export default Item;