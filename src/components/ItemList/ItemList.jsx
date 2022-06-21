import Item from "../Item/Item";
import '../../components/ItemList/ItemList.css';


export default function ItemList({items}) {

    return (
        <div className="itemList">
            {
                items.map((item) => <Item key={item.id} prod={item}/>)
            }
        </div>
    );
}