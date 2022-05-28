import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import BuyButtons from "../BuyButtons/BuyButtons";
import '../ItemDetail/ItemDetail.css';

export default function ItemDetail({item, onAdd}) {
    const [inputType, setInputType] = useState('itemCount');

    function handleInputType() {
        setInputType('buyButtons');
    }
    
    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            {/* <div className="itemDetail__filter"></div> */}
            <div className='itemDetail__info'>
               {/* <p className='itemDetail__category'>{item.categoria}</p> */}
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                {inputType === 'itemCount' ?
                    <ItemCount item={item} initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>:
                    <BuyButtons/>}            
            </div>
        </div>
    );
}
