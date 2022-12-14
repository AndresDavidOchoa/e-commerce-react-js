import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import ItemList from './ItemList';
import './ItemListContainer.css';




const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }

    }, [categoryId])

    return (
        <Container className='shop-container'>
            <h3 className="greetings">{greeting}</h3>
            <ItemList products={products} />

        </Container>
    );
}

export default ItemListContainer;