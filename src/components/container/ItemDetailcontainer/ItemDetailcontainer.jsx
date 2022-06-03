import { useEffect, useState } from "react";
import { useParams,} from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetail";
import Loader from "../../Loader/Loader";
import '../ItemDetailcontainer/ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("/assets/data.json")
            .then(response => response.json())
            .then(itemsList => itemsList.find(el => el.id === id))
            .then(data => setItem(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }, 3000);
    },[id]);
    return (
        <div className="itemDetailContainer">
            {loader?
                <Loader/>:
                <ItemDetail item={item}/>}
        </div>
    );
}