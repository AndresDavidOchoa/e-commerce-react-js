import { useContext, useState } from "react";
import Item from "../ItemList/Item";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext); 
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    };

    return (
        <div className="ItemDetailContainer">
            <Item product={product} />
            {
                showItemCount && (<ItemCount
                    initial={1}
                    stock={10}
                    onAdd={handleAdd}
                />
                )
            }
            {
                !showItemCount && (
                    <Link to='/cart'>
                        <Button variant="success">
                            Ir al carrito
                        </Button>
                    </Link>
                )
            }
        </div>
    );
}

export default ItemDetail;