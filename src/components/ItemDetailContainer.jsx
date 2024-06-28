import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemListContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargandoProducto, setCargandoProducto] = useState(true);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "products.psa", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setCargandoProducto(false);
            }
        };

        fetchProducto();
    }, [id]);

    return (
        <div>
            {cargandoProducto ? (
                <div>Cargando producto...</div>
            ) : producto ? (
                <div>
                    <h2 className="h2Products">{producto.name}</h2>
                    <img src={producto.image} alt={producto.name} />
                    <h3>$ {producto.price}</h3>
                    <p className="PDescription">{producto.description}</p>
                </div>
            ) : (
                <div>No se encontró el producto.</div>
            )}
        </div>
    );
};

export default ItemListContainer;
