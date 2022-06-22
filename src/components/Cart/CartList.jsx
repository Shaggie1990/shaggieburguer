import { UseCartContext } from "../../context/CartContext";

import CartItem from "../Cart/CartItem";
import CartForm from "../Cart/CartForm";

import './CartList.css';

export default function CartList() {
    const { cartList, totalPrice } = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cart__title">Su Pedido:</h1>
            {cartList.map((prod) => <CartItem key={prod.id} item={prod} />)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <CartForm />
        </div>
    );
}