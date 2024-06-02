import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";
import QuienesSomos from "./components/QuienesSomos";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar img="https://semanadebuenosaires.org.ar/wp-content/uploads/sites/5/2019/10/PSA-Mejora-tu-vida.png" />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Quienes-somos" element={<QuienesSomos />} />
                <Route path="/Productos" element={<Productos />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

// a ver si funciona 
