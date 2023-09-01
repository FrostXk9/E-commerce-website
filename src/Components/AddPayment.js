import { useSelector } from "react-redux";


const CheckOut = () => {

  const products = useSelector(state => state.cart);


  return (
    <>
      <h1>AddPayment</h1>
    </>
  );
}

export default CheckOut;
