import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem', backgroundColor: '#212529' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body style={{ color: 'white' }}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          CLP {product.price}
        </Card.Text>
        <div className='item-button-section'>
          <Link to={`/item/${product.id}`}>
          <Button variant="primary" style={{width: '260px' }}>
            Ir a comprar
          </Button>
        </Link>
        </div>
        
      </Card.Body>
    </Card >

  );
}

export default Item;