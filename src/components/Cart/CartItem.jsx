import { UseCartContext } from "../../context/CartContext";
import { BsBag } from "react-icons/bs";

import '../Cart/CartItem.css';

export default function CartItem({item, itemRemoved}) {
    const {clearItem} = UseCartContext();
    
    function removeItem() {
        clearItem(item.id)
    }

    return (
        <li>Item: {item.name} - Cantidad: {item.quantity} - <span className="cart__remove-icon" onClick={removeItem}><h3> <BsBag /> </h3></span></li>
    );
}