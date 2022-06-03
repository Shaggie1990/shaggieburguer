import { useState } from 'react';

import { BsBag } from "react-icons/bs";
import '../ItemCount/ItemCount.css';

export default function ItemCount({initial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(initial);
    
    function increase() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } 
    }
    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }
    function addItem() {
        onAdd(quantity);
    }
    
    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
            <span className="itemCount__quantity">{quantity}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase}>+</button>
        <div className="containerBotonCarrito">
            <button className="botonCarrito" onClick={addItem}><h3> <BsBag /> </h3>Agregar al Carrito</button>       
        </div>
    </div>
    );
}