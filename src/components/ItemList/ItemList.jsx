import Item from "../Item/Item";
import '../../components/ItemList/ItemList.css';


export default function ItemList({items, id}) {

    return (
        <div className="itemList">
            {id? 
                items.filter(prod => prod.category === id).map((prod) => <Item key={prod.id} prod={prod}/>):
                items.map((prod) => <Item key={prod.id} prod={prod}/>)
            }
        </div>
    );
}