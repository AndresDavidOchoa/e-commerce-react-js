import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <BrowserRouter basename='/e-commerce-react-js'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Gamerizate'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a Gamerizate'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
