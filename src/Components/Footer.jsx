import Nav from 'react-bootstrap/Nav';
import twitter from "../assets/twitter-3000965_640.webp";
import instagram from "../assets/instagram-1581266_640.webp";
import faceBook from "../assets/facebook-2815970_640.jpg";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
// import { faQuestion } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="bd-footer border-top text-white bg-black" id="footerComp">
      
      <div className="container d-flex justify-content-evenly">

        <div className="d-flex justify-content-center row">

          <div className="col-lg-8 mb-3">

            <span className="fs-5">Mi Store</span>

            <p className="small mb-2">Your destination for cutting-edge tech and innovation.</p>

            <p className="small">Stay updated with the latest trends.</p>

          </div>

          <div className="d-flex justify-content-center mb-3">

            {/* <h5 className="text-start">Links</h5> */}

            <Nav className="d-flex justify-content-center" id="media-txt-nav">

              <Nav.Link href="/" className="text-white">Home</Nav.Link>

              <Nav.Link href="/shop" className="text-white">Products</Nav.Link>

              <Nav.Link href="/about" className="text-white">About</Nav.Link>

              <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
              {/* <Nav.Link href="/" className="text-white">Home <FontAwesomeIcon icon={faHome} style={{"color": "black"}}/></Nav.Link>

              <Nav.Link href="/shop" className="text-white">Products <FontAwesomeIcon icon={faBagShopping} style={{"color": "black"}}/></Nav.Link>

              <Nav.Link href="/about" className="text-white">About Us <FontAwesomeIcon icon={faQuestion} style={{"color": "black"}}/></Nav.Link>

              <Nav.Link href="/contact" className="text-white">Contact <FontAwesomeIcon icon={faPhone} style={{"color": "black"}}/></Nav.Link> */}

            </Nav>

          </div>

          {/* <div className="col-6 col-lg-2 mb-3"> */}

            {/* <h5>Follow Us</h5> */}

            {/* <ul className="list-unstyled fs-6">

              <li className="mb-2"><a href="https://facebook.com" className="text-decoration-none text-white"> <img className="icon-svg-mid" src={faceBook} alt="facebook-svg"/></a></li>

              <li className="mb-2"><a href="https://twitter.com" className="text-decoration-none text-white"> <img className="icon-svg-mid" src={twitter} alt="twitter-svg" /></a></li>

              <li className="mb-2"><a href="https://instagram.com" className="text-decoration-none text-white"> <img className="icon-svg-mid" src={instagram} alt="instagram-svg" /></a></li>

            </ul> */}

          {/* </div> */}

        </div>

      </div>
      <h6 className="text-center mb-3 text-decoration-underline fw-bold">Our social Media</h6>

      <ul className="list-unstyled fs-6 d-flex justify-content-center">

        <li className="mx-2"><a href="https://facebook.com" className="text-decoration-none text-white"> <img className="icon-svg-mid" src={faceBook} alt="facebook-svg"/></a></li>

        <li className="mx-2"><a href="https://twitter.com" className="text-decoration-none text-white"> <img className="icon-svg-mid" src={twitter} alt="twitter-svg" /></a></li>

        <li className="mx-2"><a href="https://instagram.com" className="text-decoration-none text-white"> <img className="icon-svg-mid" src={instagram} alt="instagram-svg" /></a></li>

      </ul>

      <div className="d-flex justify-content-center w-100" id="media-txt">

        All rights reserved | MiStore &copy;2023

      </div>

    </footer>
  );
}

export default Footer;
