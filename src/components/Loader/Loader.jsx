import logoloader from '../../images/Loader1.jpg';

import Spinner from 'react-bootstrap/Spinner'
import '../Loader/Loader.css';

export default function Loader() {

    return (
        <div className="loader">
            <img className="loader__img" src={logoloader} alt="" />
            <h2 className='loader__text'><Spinner animation="grow" variant="primary" />Cargando...</h2>
        </div>
    );
}