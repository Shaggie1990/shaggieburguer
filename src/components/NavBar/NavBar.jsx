import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo_chico.png';
import CartWidget from '../CartWidget/CartWidget';

import '../NavBar/NavBar.css';


function NavBar() {
    return (
        <header className="header">
            {/*<a className="header__logo" href="">
                <img className="header__img" src={logo} alt="" />
            </a>
            <nav className="navBar">
                <ul className="navBar__list">
                    <li className="navBar__item"><a   href="#">Carnes</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Pollo</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Postres</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Ensaladas</a></li>
                </ul>
            </nav>*/}

                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img className="header__img" src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="navBar">
                                    <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Home</a></Nav.Link>
                                    <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Carne</a></Nav.Link>
                                    <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Pollo</a></Nav.Link>
                                    <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Ensaladas</a></Nav.Link>
                                    <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Postres</a></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                    <CartWidget/>

                </Navbar>

        </header>
    );
}

export default NavBar 