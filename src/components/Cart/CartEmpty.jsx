import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";

import './CartEmpty.css';

export default function CartList() {
    const { orderId } = UseCartContext();

    return (
        <div className="cartEmpty">
            {orderId ? <h1 className="cartEmpty__title"> Pedido Enviado! Nro de Pedido: {orderId} </h1> : <h1 className="cartEmpty__title"> El Pedido Está Vacío </h1>}
            <Link to='/'>
                <button className="cartEmpty__button"> Volver Al Menú </button>
            </Link>
        </div>
    );
}