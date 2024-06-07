import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Producto = () => {
    const { id, name } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/public/productos.json`)
            .then(response => response.json())
            .then(info => {
                const producto = info.find(item => item.id.toString() === id);
                setData(producto);
            })
            .catch(error => console.log(error));
    }, [id]);
    const formatPrice = (price) => {
        if (typeof price === 'number') {
            return price.toLocaleString('es-AR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }
        return price;
    };
    return (
        <div>
            <h2 className="h2Products">{name}</h2>
            <div>
                {data !== null ? (
                    <div>
                        <img src={data.image} alt={data.name} />
                        <h3>$ {formatPrice(data.price)}</h3>
                        <p className="PDescription">{data.description}</p>
                    </div>
                ) : (
                    <div>No hay datos</div>
                )}
            </div>
        </div>
    );
}

export default Producto;
