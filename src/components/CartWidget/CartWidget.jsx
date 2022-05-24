import { BsBag } from "react-icons/bs";
import '../CartWidget/CartWidget.css';


export default function CartWidget() {
    return (
        <div className="cart">
            <a href="#" className="cart__link">
                <span className="cart__icon"><h3> <BsBag /> </h3></span>
                <span className="cart__counter">0</span>
            </a>
        </div>
    );
} 