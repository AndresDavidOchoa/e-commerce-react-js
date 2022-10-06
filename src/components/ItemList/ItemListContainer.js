import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/products';
import ItemList from './ItemList';
import './ItemListContainer.css';




const ItemListContainer = ({ greeting }) => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(categoryName);
    }, [categoryName])

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
    }, [])

    return (
        <Container>
            <h3 className="greetings">{greeting}</h3>
            <ItemList products={products} />

        </Container>
    );
}

export default ItemListContainer;