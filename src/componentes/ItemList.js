import Item from "./Item";

const ItemList = (articulos) => {
    return(
        <ul>
            {articulos.map((articulo) => (
                <Item articulo = {articulo}/>
            ))}
        </ul> 
    );
    };


export default ItemList;