import { UseCartContext } from "../../context/CartContext";
//import { BsBag } from "react-icons/bs";

import '../Cart/CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();
    
    function removeItem() {
        clearItem(item.id)
    }

    return (
        <li>Item: {item.name} - Precio: ${item.price} - Cantidad: {item.quantity} - <span className="cart__remove-icon" onClick={removeItem}><i className="bi bi-cart-plus-fill"></i></span></li>
    );
}