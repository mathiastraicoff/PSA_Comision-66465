import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductosFiltrados = () => {
    const { category } = useParams();
    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "products.psa"), where("category", "==", category));
                const querySnapshot = await getDocs(q);
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
    }, [category]);

    return (
        <div>
            <h2>Productos en la categoría: {category}</h2>
            <section>
                <div>
                    {cargandoProductos ? (
                        <div>Cargando productos...</div>
                    ) : productos.length > 0 ? (
                        <div className="productos-container">
                            {productos.map((producto) => (
                                <Link
                                    to={`/producto/${producto.id}`} // Asegúrate de que la ruta coincida con la ruta de ItemDetailContainer
                                    key={producto.id}
                                    className="producto-item"
                                >
                                    <img
                                        className="imgProductos"
                                        src={producto.image}
                                        alt={producto.product}
                                    />
                                    <h3>{producto.product}</h3>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2>No hay productos disponibles en esta categoría.</h2>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProductosFiltrados;