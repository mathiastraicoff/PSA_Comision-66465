import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productos = () => {
    const [data, setData] = useState(null);
    const [cargandoData, setCargandoData] = useState(true);

    useEffect(() => {
        fetch('/public/productos.json')
            .then(response => response.json())
            .then(info => {
                setData(info);
                setCargandoData(false);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Productos PSA</h1>
            <section>
                <div>
                    {cargandoData ? (
                        <div>Cargando data...</div>
                    ) : (
                        <div>
                            {data !== null && data.length > 0 ? (
                                <div>
                                    {data.map(element => (
                                        <Link to={`/producto/${element.id}/${element.name}`} key={element.id}>
                                        <img className="imgProductos" src={element.image} alt={element.name} />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <h2>No hay datos</h2>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Productos;
