// App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./components/Contacto";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import { DataFirebaseProvider } from "./context/DataFirebaseContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from './components/ItemDetail'
import ProductosFiltrados from "./components/ProductosFiltrados";
import { CartProvider } from "./context/CartContext"; 
// import CheckOut from "./components/Checkout"; 

const App = () => {
    return (
        <Router>
            <DataFirebaseProvider>
                <CartProvider> 
                    <Navbar img="https://semanadebuenosaires.org.ar/wp-content/uploads/sites/5/2019/10/PSA-Mejora-tu-vida.png" />
                    <Routes>
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/Home" element={<ItemListContainer />} />
                        <Route path="/Productos" element={<ItemList />} />
                        <Route path="/producto/:id" element={<ItemDetail />} />
                        <Route path="/categoria/:category" element={<ProductosFiltrados />} />
                        {/* <Route path="/checkout" component={<Checkout/>} /> */}
                        <Route path="/Contacto" element={<Contacto />} />
                        <Route path="/Cart" element={<Cart />} />
                    </Routes>
                </CartProvider>
            </DataFirebaseProvider>
        </Router>
    );
};

export default App;
