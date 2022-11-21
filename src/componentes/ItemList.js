import Item from "./Item";

const ItemList = ({articulos}) => {
    return(
        <ul>
            {articulos.map((Articulo) => (
                <Item articulo = {Articulo}/>
            ))}
        </ul> 
    );
    };


export default ItemList;