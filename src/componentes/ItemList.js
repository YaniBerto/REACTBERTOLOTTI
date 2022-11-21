import Item from "./Item";

const ItemList = ({Articulos}) => {
    return(
        <ul>
            {Articulos.map((Articulo) => (
                <Item Articulo = {Articulo}/>
            ))}
        </ul> 
    );
    };


export default ItemList;