
import '../../container/ItemListContainer/ItemListContainer.css';
import ItemCount from '../../ItemCount/ItemCount';


export default function ItemListContainer({greeting}) {
    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" >{greeting}</h1>
            <ItemCount initial={1} stock={5}/>
        </div>
    );
}