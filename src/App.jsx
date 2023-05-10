import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from "./components/CartView/CartView";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './context/cartContext';

function App() {
  let misEstilos = { backgroundColor: "#272727" };
  
  return (
    <div className="main" style={misEstilos}>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer />}/> 
                <Route path="/category/:categoryID" element={<ItemListContainer />} />
                <Route path="/drink/:itemID" element={<ItemDetailContainer  />}/>
                <Route path="/cart" element={<CartView/>}/>
                <Route path="/thankyou/:orderid" element={<h1 style={{ color: "white", paddingLeft:"40%" }} >Gracias por tu compra</h1>} />
                <Route path="*" element={<h4>Pagina no encontrada Error: 404</h4>} />
              </Routes>
            <Footer />
        </BrowserRouter >
      </CartContextProvider>
    </div>
  );
}

export default App;
