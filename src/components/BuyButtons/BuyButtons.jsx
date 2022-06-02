import { Link } from "react-router-dom";
import '../BuyButtons/BuyButtons.css';

export default function BuyButtons() {
    
    return (
        <div className="buyButton">
            <Link to='/cart'>
                <button className="button">Seguir comprando</button>
            </Link>
            <Link to='/'>
                <button className="button">Finalizar compra</button>
            </Link>
        </div>
    );

}