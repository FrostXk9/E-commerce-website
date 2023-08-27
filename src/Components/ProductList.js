import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from "./Store/CartSlice";
import { useDispatch } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';


const ProductList = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);
  useEffect(() => {
    //fetching api
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(result => getProducts(result))
  }, []);

  const addToCart = (product) =>{
    //dispatch an add action
    dispatch(add(product))
  }


if(Array.isArray(products)) {
  const cards = products.map(product => (

   <div className="col-md-3" style={{ marginBottom: '10px' }}>
     <Card key={product.id} className="h-100">
       <Card>
         <div className="text-center">
           <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
         </div>
         <Card.Body>
           <div className="column">
             <Card.Title>{product.title}</Card.Title>
             <Card.Text>
               Category : 
               {product.category}
             </Card.Text>
             <Card.Text>
               Price : 
               ${product.price}
             </Card.Text>
           </div>
           <Accordion>
             <Accordion.Item eventKey="0">
               <Accordion.Header>Description</Accordion.Header>
               <Accordion.Body>
                 {product.description}
               </Accordion.Body>
             </Accordion.Item>
           </Accordion>
         </Card.Body>
         <Card.Footer style={{ background: 'white' }}>
           <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCart(product)}>Add To Cart</Button>
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
}
}

export default ProductList;
