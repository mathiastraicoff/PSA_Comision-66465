import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products.psa"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosData);
            } catch (error) {
                console.error(error);
            } finally {
                setCargandoProductos(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Productos PSA</h2>
            <section>
                <div>
                    {cargandoProductos ? (
                        <div>Cargando productos...</div>
                    ) : productos.length > 0 ? (
                        <div className="productos-container">
                            {productos.map((producto) => (
                                <Link to={`/producto/${producto.id}`} key={producto.id} className="producto-item">
                                    <img className="imgProductos" src={producto.image} alt={producto.product} />
                                    <h3>{producto.category}</h3>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2>No hay productos disponibles.</h2>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ItemList;
