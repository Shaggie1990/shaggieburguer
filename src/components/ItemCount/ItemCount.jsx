import { useEffect, useState } from 'react';
import { BsBag } from "react-icons/bs";
import '../ItemCount/ItemCount.css';

export default function ItemCount({ stock, onAdd }) {
    const [quantity, setQuantity] = useState(1);

    const increase = () => { quantity < stock && setQuantity(quantity + 1) }
    const decrease = () => { quantity > 1 && setQuantity(quantity - 1) }

    useEffect(() => {
        stock <= 0 ? setQuantity(0) : setQuantity(1);
    }, [stock]);

    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease} style={{ pointerEvents: stock <= 0 && 'none', opacity: stock <= 0 && '0.5' }}> - </button>
            <span className="itemCount__quantity" style={{ opacity: stock <= 0 && '0.5' }}>{quantity}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase} style={{ pointerEvents: stock <= 0 && 'none', opacity: stock <= 0 && '0.5' }}> + </button>
            <div className="containerBotonCarrito">
                <button className="botonCarrito" onClick={() => onAdd(quantity)} style={{ pointerEvents: stock <= 0 && 'none', opacity: stock <= 0 && '0.5' }}> <h3> <BsBag /> </h3> Agregar al Carrito </button>
            </div>
        </div>
    );
}