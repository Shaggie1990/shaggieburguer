import { UseCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import './CartList.css';

export default function CartList() {
    const {cartList, clearCart, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map((prod) => <CartItem key={prod.id} item={prod}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar pedido</button>
        </div>
    );
}