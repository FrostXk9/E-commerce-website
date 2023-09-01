import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { remove } from "./Store/CartSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { purchase } from "./Store/CartSlice";

const Cart = () => {


  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const removeFromCart = (id) => {
    //dispatches a remove action 
    dispatch(remove(id));
  }



  //Product Quantity
  const [count, setCount ]= useState(0)

  function increment(quantity) {
    setCount(CurrentCount => {
      return CurrentCount + quantity
    });
  }

  function decrement(quantity) {
    setCount(CurrentCount => {
      return CurrentCount + quantity
    });
  }
  
  const onPurchase = (product) =>{
    //Purchases a product
    dispatch(purchase(product))
  }
  



  const cards = products.map(product => (
    <div key={product.id} className="col-md-12" style={{marginBottom : '10px'}}>

      <Card className="h-100">
       <Card style={{ width: '18rem' }}>
         <div className="text-center">
           <Card.Img variant="top" src={product.image} style={{width : '100px', height : '130px' }} />
         </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
              <Card.Text>
               ${product.price}
              </Card.Text>
              <button className="btn-quantity-decrement" onClick={() => decrement(-1)}>-</button>
                <span>{count}</span>
              <button className="btn-quantity-increment" onClick={() => increment(+1)}>+</button>
          </Card.Body>
          <Card.Footer style={{background : 'white'}}>
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
            <Button variant="success" className="btn-purchase" onClick={() => onPurchase(product)}>Purchase</Button>
          </Card.Footer>
       </Card>
     </Card>

    </div>
  ));    


  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-row">
        {cards}
      </div>
    </div>
  );
}

export default Cart;
