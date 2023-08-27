import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarLayout = () => {


  const CartProducts = useSelector(state => state.cart);



  return (
    <div className="Nav-bar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link} className="icon-nav">Products</Nav.Link>
                <Nav.Link to= "/cart" as={Link} className="icon-nav"><FontAwesomeIcon icon={faBagShopping} />{CartProducts.length}</Nav.Link>
                <Nav.Link to="/address" as={Link} className="icon-nav">Register</Nav.Link>
              </Nav>
              <Form inline>
                <Row>
                 <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                     className=" mr-sm-2"
                    />
                 </Col>
                  <Col xs="auto">
                   <Button type="submit">Submit</Button>
                  </Col>
               </Row>
              </Form>           
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default NavbarLayout;
