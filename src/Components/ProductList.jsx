import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { add } from "./Store/CartSlice";


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
  

  const handleRating = (num) => {
    for(let i of products){
      if(i.rating.rate > num){
        return <span>{num}</span>
      }
      //  else if(!num[i.rating.rate]){
      //   return <small>not rated</small>
      // }
    }
  }


  if(Array.isArray(products)) {
  const cards = products.map(product => (

    <div  key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>

      <Card className="h-100">

        <div className="d-flex justify-content-center">

          <div className="fw-bold m-1">

            <div id="tag">

              {handleRating(product.rating.rate)} 

              <div className="rating">

                <input value="1" name="rating" id="starOne" type="radio" />

                <label htmlFor="starOne"></label>

              </div>

            </div>

          </div>

          <Card.Img variant="top" src={product.image} alt={product.title} style={{ width: '100px', height: '130px' }} />

        </div>

        <Card.Body>

          <div className="column" style={{overflow: "scroll", maxHeight:"70px"}}>

            <Card.Title className="fs-6 fw-normal">{product.title}</Card.Title>

            <Card.Text className="fs-6">

              Price : 
              ${product.price}

            </Card.Text>

            <Card.Text className="fs-6">
              
              <span className="bg-info px-2 shadow text-center">Available in store: {product.rating.count}</span>

            </Card.Text>

          </div>

          <Card.Text className="d-flex justify-content-evenly mt-1">

            <Nav.Link to={`/shop/${product.id}/${product.title}/${product.price}`} as={Link} >

              <FontAwesomeIcon icon={faEye} />

            </Nav.Link>

            <FontAwesomeIcon icon={faHeart} id="ic"/>

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
} else if (typeof products === "undefined" || products.length === 0){
  console.log("ohk")
  return <div className="mt-5 container"><h1>Loading....</h1></div>
}}

export default ProductList;
