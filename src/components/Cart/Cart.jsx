import { UseCartContext } from '../../context/CartContext';

import CartList from "./CartList";
import CartEmpty from "./CartEmpty";

import '../Cart/Cart.css';

export default function Cart() {
    const { totalItems } = UseCartContext();

    if (!totalItems) {
        return (
            <div className="cart_cart1">
                <CartEmpty />
            </div>
        );
    }

    return (
        <div className="cart_cart">
            <CartList />
        </div>
    );
}