import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { remove } from "./Store/CartSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {


  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const removeFromCart = (id) => {
    //dispatches a remove action 
    dispatch(remove(id));
  }



  const cards = products.map(product => (
    <div className="col-md-12" style={{marginBottom : '10px'}}>

<Card key={product.id} className="h-100">
  <Card style={{ width: '18rem' }}>
   <div className="text-center">
     <Card.Img variant="top" src={product.image} style={{width : '100px', height : '130px' }} />
   </div>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
        ${product.price}
    </Card.Text>
  </Card.Body>

  <Card.Footer style={{background : 'white'}}>
   <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
  </Card.Footer>
 </Card>
</Card>


    </div>
  ));    


  return (
    <div>
      <h1>Cart</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  )
}

export default Cart;
