import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavbarLayout = () => {


  const CartProducts = useSelector(state => state.cart);
  

  return (
    <>
    
      <Navbar expand="lg" id="navbar">
          
        <Nav>
          <Navbar.Brand href="/">
            <img
              src="https://i.postimg.cc/ydzTYtBf/Add-a-heading.png"
              width="140"
              height="40"
              className="d-inline-block align-top"
              alt="Mi-store-logo"
              id="logo"
            />
          </Navbar.Brand>

          <div className="d-flex justify-content-center">

            <Nav.Link to= "/" as={Link} className="icon-nav" id="navTop">

              Home
              
            </Nav.Link>

            <Nav.Link to= "/about" as={Link} className="icon-nav" id="navTop">

              About

            </Nav.Link>

            <Nav.Link to="/shop" as={Link} className="icon-nav" id="navTop">

              Shop

            </Nav.Link>

            <Nav.Link to= "/contact" as={Link} className="icon-nav" id="navTop">

              Contact

            </Nav.Link>

            <Nav.Link to= "/signUp" as={Link} className="icon-nav" id="navTop">
              
              Sign up 

            </Nav.Link>

            <Nav.Link to= "/cart" as={Link} className="icon-nav">
              <FontAwesomeIcon icon={faShoppingCart} style={{color: "black"}}/> 

              <span className="cart-count">

                {CartProducts.length}

              </span>

            </Nav.Link>
                  
          </div>

        </Nav>

      </Navbar>

    </>
  );
}

export default NavbarLayout;
