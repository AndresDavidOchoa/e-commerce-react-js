import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Button, Card } from "react-bootstrap";
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
            <Card style={{ width: '18rem', backgroundColor: '#212529' }}>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body style={{ color: 'white' }}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        CLP {product.price}
                    </Card.Text>
                </Card.Body>
            </Card >

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
                        <Button className='goToCartButton'>
                            Ir al carrito
                        </Button>
                    </Link>
                )
            }
        </div>
    );
}

export default ItemDetail;