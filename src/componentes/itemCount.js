import React, {useState, useEffect} from "react";


const ItemCount = ({Stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < Stock) {
            setCount(count+1);
        } else {
            alert("Sin stock");
        }
    }

    const handleDecrement = () => {
 if (count>0){
    setCount(count - 1)
 }
    }

    const Comprar = () => {
        onAdd(count);
        setCount(initial);
    }


    useEffect(()=> {

        console.log("Se montó el ItemCount");
    }, []);

    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);

    return (
    <div className="count">
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={Comprar}></button>
    </div>
    );
};

export default ItemCount;