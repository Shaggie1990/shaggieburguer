import { Link } from 'react-router-dom';

import '../Item/Item.css';

const Item = ({ item }) => {
    return (
        <div className="card-container col-md-4" >
            <div className="card w-100 mt-5" >
                <div className="card-item_header">
                    <h2>{item.name}</h2>
                </div>
                <div className="card-item_body">
                    <img src={item.img} alt='' style={{ filter: item.stock <= 0 && 'grayscale(100%)' }} />
                    <p>{item.category}</p>
                    <h3>{`Precio: $${item.price}`}</h3>
                </div>
                <div className="card-item_Footer">
                    <Link to={`/itemDetail/${item.id}`} style={{ pointerEvents: item.stock <= 0 && 'none' }}>
                        <button className="card_btn">{item.stock <= 0 ? 'No disponible' : 'Ver Producto'}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Item