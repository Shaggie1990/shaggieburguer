import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import BuyButtons from "../BuyButtons/BuyButtons";
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ item }) =>  {
    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        alert(`${quantity} ${item.name} agregados al carrito`)
        addToCart({...item, quantity})
        setInputType('buyButtons');
    }
    
    return (
        <div className="card_itemDetail">
            <div className=" width: '10rem'" >
                <div className="card-itemDetail_header">
                    <h2>{item.name}</h2>     
                </div>
                <div className="card-itemDetail_body">
                    <img src={item.img} alt="" />
                    <h3>{item.category}</h3>
                    <p>{item.detail}</p>
                    <h4>{`Precio: $${item.price}`}</h4>
                </div>
                <div className="card-footer">
                    {inputType === 'itemCount' ?
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>:<BuyButtons/>}
                </div>
            </div>
        </div>

    );
}
export default ItemDetail
