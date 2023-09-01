import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from "./Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const ProductList = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);
  useEffect(() => {
    //fetching api
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(result => getProducts(result))
  }, []);

  const [isClicked, setIsClicked] = useState(false);
  const cart = useSelector(state => state.cart);


  const addToCart = (product) =>{
    //dispatch an add action
      if(setIsClicked(true) === dispatch(add(product)) === isClicked){
        return <Button className="add-to-cart-btn" variant="success">
         </Button>
      }
  }



  if(Array.isArray(products)) {
  const cards = products.map(product => (

    <div  key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>
      <Card className="h-100">
        <Card>
         <div className="text-center">
           <Card.Img variant="top" src={product.image} alt={product.title} style={{ width: '100px', height: '130px' }} />
         </div>
         <Card.Body>
           <div className="column">
             <Card.Title>{product.title}</Card.Title>
             <Card.Text>
               Category : 
               {product.category}
             </Card.Text>
             <Card.Subtitle>
             <div className="rating">
               <input value="5" name="rating" id="starFive" type="radio" />
               <label htmlFor="starFive"></label>
                <input value="4" name="rating" id="starFour" type="radio" />
               <label htmlFor="starFour"></label>
               <input value="3" name="rating" id="starThree" type="radio" />
               <label htmlFor="starThree"></label>
               <input value="2" name="rating" id="starTwo" type="radio" />
               <label htmlFor="starTwo"></label>
               <input value="1" name="rating" id="starOne" type="radio" />
               <label htmlFor="starOne"></label>
              </div>
             </Card.Subtitle>
             <Card.Text>
               Price : 
               ${product.price}
             </Card.Text>
           </div>
           <div className="About-product">
             <Accordion>
               <Accordion.Item eventKey="0">
                 <Accordion.Header>About Product</Accordion.Header>
                  <Accordion.Body>
                   {product.description}
                  </Accordion.Body>
               </Accordion.Item>
             </Accordion>
           </div>
         </Card.Body>
         <Card.Footer style={{ background: 'white' }}>
           {!cart.some(item => item.id === product.id) ? (
           <Button
             variant="dark"
             className="add-to-cart-btn" 
             onClick={() => addToCart(product)}>
              <FontAwesomeIcon icon={faShoppingCart} />
              Add To Cart
           </Button>) : (
            <Button className="add-to-cart-btn" variant="success">
              <FontAwesomeIcon icon={faCheck} />
              Added to Cart
            </Button>
           )}
         </Card.Footer>
        </Card>
      </Card>
    </div>
  ));

  return (
    <div className="row">
      <h1>Products</h1>
      {cards}
    </div>
  );
}}

export default ProductList;
