import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./components/Contacto";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import { DataFirebaseProvider } from "./context/DataFirebaseContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'
import ProductosFiltrados from "./components/ProductosFiltrados";
import { CartProvider } from "./context/CartContext"; 

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
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        <Route path="/categoria/:category" element={<ProductosFiltrados />} />
                        <Route path="/Contacto" element={<Contacto />} />
                        <Route path="/Cart" element={<Cart />} />
                    </Routes>
                </CartProvider>
            </DataFirebaseProvider>
        </Router>
    );
};

export default App;