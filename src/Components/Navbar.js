import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavbarLayout = () => {


  const CartProducts = useSelector(state => state.cart);


  return (
     <div className="Nav-bar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://i.postimg.cc/tgHwfQ08/shopping-cart-logo.webp"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Brand className="Nav-logo">miMarket</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link} className="icon-nav"><FontAwesomeIcon icon={faShop} />Shop</Nav.Link>
                <Nav.Link to="/address" as={Link} className="icon-nav"><FontAwesomeIcon icon={faAddressCard} /> Register</Nav.Link>
                <Nav.Link to= "/cart" as={Link} className="icon-nav"><FontAwesomeIcon icon={faShoppingCart} />{CartProducts.length}</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
     </div>
  );
}

export default NavbarLayout;
