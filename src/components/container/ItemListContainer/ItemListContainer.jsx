import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import ItemList from '../../ItemList/ItemList';
import Loader from '../../Loader/Loader';
import '../../container/ItemListContainer/ItemListContainer.css';

export default function ItemListContainer() {
    const [items,setItems] = useState([])
    const [loader,setLoader] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection
        
        getDocs(queryCollectionFilter)
        .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))

    },[id])

    return (
        <div className="itemListContainer">
            {loader?
                <Loader/>:
                <ItemList items={items}/>}
        </div>
    );
}