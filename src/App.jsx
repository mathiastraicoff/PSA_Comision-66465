import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";
import QuienesSomos from "./components/QuienesSomos";
import Producto from "./components/Producto";
import Cart from "./components/Cart"; 

const App = () => {
    return (
        <BrowserRouter>
            <Navbar img="https://semanadebuenosaires.org.ar/wp-content/uploads/sites/5/2019/10/PSA-Mejora-tu-vida.png" />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Quienes-somos" element={<QuienesSomos />} />
                <Route path="/Productos" element={<Productos />} />
                <Route path="/Producto/:id/:name" element={<Producto />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/Home" />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;
