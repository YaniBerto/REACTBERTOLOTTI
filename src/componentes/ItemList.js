import Item from "./Item";

const ItemList = ({articulos}) => {
    return(
        <div className="articulosPagina">
        <ul>
            {articulos.map((Articulo) => (
                <Item articulo = {Articulo}/>
            ))}
        </ul>
        </div> 
    );
    };


export default ItemList;