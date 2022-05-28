import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../CartWidget/CartWidget.css';


export default function CartWidget() {
    return (
        <Link to='/cart'>
            <div className='cartWidget'>
                <span className="cartWidget__icon"><h3> <BsBag /> </h3></span>
                <span className="cartWidget__counter">0</span>
            </div>
        </Link>
    );
} 