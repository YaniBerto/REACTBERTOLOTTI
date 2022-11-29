import Item from "./Item";

const ItemList = ({articulos}) => {
    return(
        <div className="articulosPagina">
        
            {articulos.map((Articulo) => (
                <Item articulo = {Articulo}/>
            ))}
        
        </div> 
    );
    };


export default ItemList;