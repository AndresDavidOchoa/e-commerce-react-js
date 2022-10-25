import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { doc, getFirestore } from 'firebase/firestore';


function App() {
  // useEffect(() => {
  //   const database = getFirestore();

  //   const itemReference = doc(database, 'items', 'pXkmSN4b9m96JOQKvtUE');

  //   const getDoc(itemReference)
  //     .then((snapshot) => {

  //     })
  // })

  return (
    <BrowserRouter basename='/e-commerce-react-js'>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Gamerizate'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a Gamerizate'} />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
     

    </BrowserRouter>
  );
}

export default App;
