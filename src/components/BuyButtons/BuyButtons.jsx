import { Link } from "react-router-dom";

import '../BuyButtons/BuyButtons.css';

export default function BuyButtons() {

    return (
        <div className="buyButton">
            <Link to='/cart'>
                <button className="button">Ver Pedido</button>
            </Link>
            <Link to='/'>
                <button className="button">Volver al Menú</button>
            </Link>
        </div>
    );

}