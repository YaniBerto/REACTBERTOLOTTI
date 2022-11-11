const Item = ({articulos}) => {
    return( 
        <div>
        <li>{articulos.Descripcion}</li>
        <div style={{width: '18rem'}} class="card" />
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body"/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3 class="btn btn-primary">Go somewhere</h3>
  </div>
);
};

export default Item;