import { useState } from "react";
import { Link } from 'react-router-dom';
import { UseCartContext } from '../../context/CartContext';
import CartList from "./CartList";
import '../Cart/Cart.css';


export default function Cart() {
    const {totalItems, orderId, createOrder} = UseCartContext();
    const [orderSent, setOrderSent] = useState(false)

    function sendOrderManage(customerData) {
        setOrderSent(true);
        createOrder(customerData);
    }

    if (!totalItems) {
        return (
            <div className="cart_cart1">
            {orderSent ? <h1>Pedido Enviado! Nro de Pedido: {orderId}</h1> : <h1>El Pedido Está Vacío</h1>}
                <Link to='/'>
                    <button>Volver al Menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart_cart">
            <CartList sendOrderManage={sendOrderManage}/>
        </div>
    );
}