import { useContext } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, total, removeItem } = useContext(CartContext);


    console.log({ cart, total });

    const handleRemove = (itemId) => {
      removeItem(itemId);
    }

    const showTable = cart.length > 0

    return (
        <Container className='cartContainer'>
          <h1>Carrito de Compras</h1>
          {showTable && (
            <>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td><BsFillTrashFill onClick={() => handleRemove(item.id)}/></td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <h3>Total: $ {total}</h3>
              {/* <Button variant="success" onClick={handleOpen}>Finalizar compra</Button> */}
            </>
          )}
          {!showTable && (
            <>
              <h3>Carrito de compra vacio</h3>
              <Link to='/'>
                <Button variant="success">Ver productos</Button>
              </Link>
            </>
          )}
          {/* <OrderModal
            showModal={showModal}
            onClose={handleClose}
            onBuy={handleBuy}
            orderId={orderId}
          /> */}
        </Container>
      );
}

export default Cart;