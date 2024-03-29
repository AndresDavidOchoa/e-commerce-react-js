import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='itemCountContainer'>
            <div>
                <Button className='countButtons' disabled={count <= 1} onClick={handleSubtract}>
                    -
                </Button>
                <Button className='countButtons' disabled={count >= stock} onClick={handleAdd}>
                    +
                </Button>
                <h5>{count}</h5>
            </div>
            <div>
                <Button className='addToCartButton' disabled={stock <= 0} onClick={handleClick}>
                    Agregar al  Carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
