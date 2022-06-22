import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";

import '../CartWidget/CartWidget.css';

export default function CartWidget() {
    const { totalItems } = UseCartContext();

    return (
        <Link to='/cart' style={{ pointerEvents: !totalItems ? 'none' : '' }}>
            <div className='cartWidget' style={{ opacity: !totalItems ? '0.5' : '1' }}>
                <span className="cartWidget__icon"> <h3> <BsBag /> </h3></span>
                <span className="cartWidget__counter">{totalItems}</span>
            </div>
        </Link>
    );
} 