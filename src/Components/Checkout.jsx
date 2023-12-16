import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {

  const [count, setCount ]= useState(0);

  const productValue = useSelector(state => state.cart);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of productValue) {
      totalPrice += item.price;
    }
    return totalPrice;
  };

  const iterateThroughItemNames = () => {
    let productCategory = " ";
    for (const item of productValue) {
      productCategory += item.category + " | ";
    }
    return productCategory;
  }

  function increment(quantity) {
    setCount(CurrentCount => {
      return CurrentCount + quantity
    });
  }

  function decrement(quantity) {
    setCount(CurrentCount => {
      if(CurrentCount - quantity <= 0){
        return 0
      }
      return CurrentCount - quantity
    });
  }

  return (

    <div className="container d-flex justify-content-center">
      
      <div className="m-5 col-xl-12 col-lg-12 col-md-12 col-sm-12" id="descript">

        <div className="p-2 bg-black text-center text-white border-bottom">

          Price: ${calculateTotalPrice()}

        </div>

        <div className="p-2 bg-black text-center text-white border-bottom">

          Quantity: {productValue.length}

          <div className="dec-inc-container">

            <button className="btn-quantity-decrement" onClick={() => decrement(1)}>-</button>
            <span className="pt-1">{count}</span>
            <button className="btn-quantity-increment" onClick={() => increment(1)}>+</button>

          </div>

        </div>

        <div className="border-bottom border-black" id="productSection">

          <h4 className="text-black text-center"> Products:</h4>

          <div className="text-center">

            {iterateThroughItemNames()}
            
          </div>
          
        </div>

        <div className="d-flex justify-content-end">

          <button className="buton-checkout">Checkout</button>

        </div>

        <p className="text-center small border-top border-black fw-bold"><FontAwesomeIcon icon={faCircleCheck} style={{"color":"pink"}}/> Powered by Mi-Cart &copy;</p>
        
      </div>

    </div>

  );
}

export default Checkout;