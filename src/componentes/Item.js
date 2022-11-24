
const Item = ({articulo}) => {
    return( 
        <div className="card">
        <li>{articulo.Descripcion}</li>
        <div style={{width: '18rem'}} class="card" />
  <img src={articulo.img} className="card-img-top" alt="..."/>
  <div class="card-body"/>
    <h5 class="card-title">{articulo.Descripcion}</h5>
    <p class="card-text">{articulo.Precio}</p>
    <h3 class="btn btn-primary">Comprar</h3>
  </div>
);
};

export default Item;