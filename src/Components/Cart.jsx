import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { remove } from "./Store/CartSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Checkout from "./Checkout";


const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);


  const removeFromCart = (id) => {
    //dispatches a remove action 
    dispatch(remove(id));
  }

  // Product Quantity
  const [count, setCount ]= useState(0);

  function increment(quantity) {
    setCount(CurrentCount => {
      return CurrentCount + quantity
    });
  }

  function decrement(quantity) {
    setCount(CurrentCount => {
      return CurrentCount - quantity
    });
  }

  const cards = products.map(product => (
    <div key={product.id} className="Cart-card" style={{marginBottom : '10px'}}>

      <Container>

        <Col>

          <Card className="h-100 col-md-12">

            <div className="cart-img">

              <Card.Img variant="top" src={product.image} style={{width : '100px', height : '130px' }} />

            </div>

            <Card.Body>

              <Card.Title className="cart-txt" style={{overflow: "scroll", maxHeight:"40px"}}>

               {product.title}

              </Card.Title>
              <Card.Text className="d-flex justify-content-center">
                
                <button className="btn-quantity-decrement" onClick={() => decrement(1)}>-</button>
                <span>{count}</span>
                <button className="btn-quantity-increment" onClick={() => increment(1)}>+</button>

              </Card.Text>

            </Card.Body>


            <Card.Footer className="cart-footer">

              <Button className="btn btn-dark shadow w-100 fw-bold" variant="" onClick={() => removeFromCart(product.id)}>Remove</Button>

            </Card.Footer>

          </Card>

        </Col>
        
      </Container>

    </div>
  ));    


  return (
    <div className="container-fluid">

      <div className="container text-dark mt-1">

      <Checkout />
      
      </div>

      <h1 className="display-6 fs-5 fw-bold text-center container text-black border-bottom">{products.length} items in cart</h1>

      
      <div className="container p-1" id="cart-row">
        
        {cards}

      </div>

    </div>
    
  );

}
export default Cart;
