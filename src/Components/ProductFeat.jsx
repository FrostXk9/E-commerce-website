import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const ProductFeat = () => {
    const {id, title, price} = useParams();

    console.log(id, price, title)
   return (
    <>
    <div className="container d-flex justify-content-center mt-5">
        <div className="row">
             <Nav.Link to="/shop" as={Link} className='fw-bold text-end '>&lsaquo; Go back</Nav.Link>
            <div className="text-center">Details of product {id}</div>
            <div className="text-center">{title}</div>
            <div className="text-center">{price}</div>
        </div>
    </div>
    </>
  )
}

export default ProductFeat
