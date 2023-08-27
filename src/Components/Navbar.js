import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const NavbarLayout = () => {


  const CartProducts = useSelector(state => state.cart);



  return (
    <div className="Nav-bar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link} className="icon-nav"><FontAwesomeIcon icon={faShop} />Shop</Nav.Link>
                <Nav.Link to="/address" as={Link} className="icon-nav"><FontAwesomeIcon icon={faAddressCard} /> Register</Nav.Link>
                <Nav.Link to= "/cart" as={Link} className="icon-nav"><FontAwesomeIcon icon={faBagShopping} />{CartProducts.length}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default NavbarLayout;
