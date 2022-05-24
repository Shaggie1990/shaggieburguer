import { BsBag } from "react-icons/bs";
import '../CartWidget/CartWidget.css';


export default function CartWidget() {
    return (
        <div className="cart">
            <button className="cart__btn"><h3> <BsBag /> </h3></button>
            <span className="cart__counter">0</span>
        </div>
    );
}