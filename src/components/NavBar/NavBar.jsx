import logo from '../../images/logo_chico.png';
import '../NavBar/NavBar.css';


function NavBar() {
    return (
        <header className="header">
            <a className="header__logo" href="">
                <img className="header__img" src={logo} alt="" />
            </a>
            <nav className="navBar">
                <ul className="navBar__list">
                    <li className="navBar__item"><a className="navBar__link" href="#">Carnes</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Pollo</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Postres</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Ensaladas</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar 