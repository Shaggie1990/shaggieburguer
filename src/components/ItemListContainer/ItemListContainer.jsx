
import '../ItemListContainer/ItemListContainer.css';

export default function ItemListContainer({greeting}) {
    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" >{greeting}</h1>
        </div>
    );
}