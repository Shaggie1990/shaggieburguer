import { Link } from 'react-router-dom';
import logo from '../../images/logo_chico.png';
import CartWidget from '../CartWidget/CartWidget';

import { Container, Nav, Navbar } from 'react-bootstrap';
import '../NavBar/NavBar.css';

const NavBar = () => {
    return (
        <>
            <header className="header">
                <Navbar collapseOnSelect expand="lg" className="Navbar__Header">
                    <Container>
                        <Link to='/'>
                            <img className="nav__img" src={logo} alt="" />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navBar">
                                <Link to='/category/Carnes' className='navBar__link'>
                                    Carnes
                                </Link>
                                <Link to='/category/Pollos' className='navBar__link'>
                                    Pollos
                                </Link>
                                <Link to='/category/Nuggets' className='navBar__link'>
                                    Nuggets
                                </Link>
                                <Link to='/category/Ensalada' className='navBar__link'>
                                    Ensaladas
                                </Link>
                                <Link to='/category/Postres' className='navBar__link'>
                                    Postres
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        <CartWidget />
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default NavBar