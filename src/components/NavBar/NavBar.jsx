//import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_chico.png';
import CartWidget from '../CartWidget/CartWidget';

import '../NavBar/NavBar.css';


export default function NavBar() {
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__img" src={logo} alt="" />
            </Link>
            <nav className="navBar">
                <ul className="navBar__list">
                    <Link to='/category/Carne' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Carne</li>
                    </Link>
                    <Link to='/category/Pollo' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Pollo</li>
                    </Link>
                    <Link to='/category/Ensaladas' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Ensaladas</li>
                    </Link>
                    <Link to='/category/Postres' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Postres</li>
                    </Link>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
}


{/* <Navbar expand="lg">
                    <Container>
                    <Navbar.Brand href="#home"><img className="header__img" src={logo} alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="navBar">
                                        <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Carne</a></Nav.Link>
                                        <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Pollo</a></Nav.Link>
                                        <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Ensaladas</a></Nav.Link>
                                        <Nav.Link className="navBar__item"><a className="navBar__link" href="#">Postres</a></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                    </Container>
                    
                </Navbar>*/}