import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [categorias, setCategorias] = useState([]);
    const [cargandoCategorias, setCargandoCategorias] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products.psa"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                const categoriasMap = {};
                productosData.forEach((producto) => {
                    if (!categoriasMap[producto.category]) {
                        categoriasMap[producto.category] = producto;
                    }
                });

                const categoriasArray = Object.values(categoriasMap);
                setCategorias(categoriasArray);
            } catch (error) {
                console.error(error);
            } finally {
                setCargandoCategorias(false);
            }
        };

        fetchData();
    }, []);

    const handleCategoriaClick = (categoria) => {
        navigate(`/categoria/${categoria.category}`, {
            state: {
                image: categoria.image,
                product: categoria.product,
            },
        });
    };

    return (
        <div>
            <h1 className="title">PSA, Siempre Cuidadonte</h1>
            <section>
                <div>
                    {cargandoCategorias ? (
                        <div>Cargando categorías...</div>
                    ) : categorias.length > 0 ? (
                        <div className="productos-container">
                            {categorias.map((categoria) => (
                                <div
                                    key={categoria.id}
                                    className="producto-item"
                                    onClick={() => handleCategoriaClick(categoria)}
                                >
                                    <img className="imgProductos" src={categoria.image} alt={categoria.product} />
                                    <h3>{categoria.category}</h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2>No hay categorías disponibles.</h2>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ItemListContainer;
