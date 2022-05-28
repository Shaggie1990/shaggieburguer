export default function Cart() {
    
    return (
        <div className="cart">
            <h1>Soy cart</h1>
        </div>
    );
}

{/*
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import '../Cart/Cart.css';

export default function Cart() {
    const {cartList, clearCart, totalPrecio, totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>El pedido está vacío</h1>
                <button>Volver al menú</button>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrecio}`}</p>
            <button onClick={clearCart}>Vaciar pedido</button>
        </div>
    );
}
*/}