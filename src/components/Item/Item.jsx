import itemImg from '../../images/hamburguesa clasica.jpg';
import ItemCount from '../ItemCount/ItemCount';

import '../Item/Item.css';

export default function Item() {

    return (
        <div className="item">
            <img className="item__img" src={itemImg} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <h2 className="item__title">Hamburguesa Clasica</h2>
                <ItemCount initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad/es agregada/s al pedido`)}/>
            </div>
        </div>
    );
}