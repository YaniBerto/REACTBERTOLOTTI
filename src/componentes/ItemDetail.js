const ItemDetail = ({item})=> {
    return (
        <div>
            <div>{item.Descripcion}</div>
            <img src={item.img}alt="Bijouterie"/>
        </div>
    );
};

export default ItemDetail;