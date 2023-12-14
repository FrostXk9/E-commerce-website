import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from "./Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { faEye } from "@fortawesome/free-solid-svg-icons";


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

        <div className="d-flex justify-content-center">

          <div className="fw-bold m-1"><p id="tag"> Exclusive</p></div>

          <Card.Img variant="top" src={product.image} alt={product.title} style={{ width: '100px', height: '130px' }} />

        </div>

        <Card.Body>

          <div className="column" style={{overflow: "scroll", maxHeight:"70px"}}>

            <Card.Title className="fs-6 fw-normal">{product.title}</Card.Title>

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

            <Card.Text className="fs-6">

              Price : 
              ${product.price}

            </Card.Text>

          </div>
            <Card.Text className="d-flex justify-content-end mt-1">
              <Nav.Link to={`/shop/${product.id}/${product.title}/${product.price}`} as={Link} ><Button className="btn bg-dark rounded-2"><FontAwesomeIcon icon={faEye} /></Button></Nav.Link>
            </Card.Text>

        </Card.Body>
         
        <Card.Footer style={{ background: 'white' }}>

          {!cart.some(item => item.id === product.id) ? (
            <Button
             variant="dark"
             className="add-to-cart-btn" 
             onClick={() => addToCart(product)}>
              
              <FontAwesomeIcon icon={faShoppingCart} />
              Add To Cart

             </Button> ) : (
            <Button className="add-to-cart-btn" variant="success">

              <FontAwesomeIcon icon={faCheck} />

              Added to Cart

            </Button>
          )}
        </Card.Footer>

      </Card>

    </div>

  ));

  return (
    <div className="container-fluid mt-5">

      <div className="row">

       {cards}

      </div>

    </div>
  );
} else if (typeof products === "undefined"){
  console.log("ohk")
  return <div className="mt-5 container"><h1>Loading....</h1></div>
}}

export default ProductList;
