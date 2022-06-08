import { Link } from 'react-router-dom';
import { UseCartContext } from '../../context/CartContext';
import CartItem from "./CartItem";
import '../Cart/Cart.css';


export default function Cart() {
    const {cartList, clearCart, totalPrice, totalItems} = UseCartContext();

    if (!totalItems) {
        return (
            <div className="cart_cart1">
                <h1>El pedido está vacío</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart_cart">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map(prod => <CartItem key={prod.id} item={prod}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar pedido</button>
        </div>
    );
}