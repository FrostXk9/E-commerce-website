import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faShippingFast, faNewspaper } from "@fortawesome/free-solid-svg-icons";
// import Carousel from 'react-bootstrap/Carousel';
const Landing = () => {
  const landingImg = {
    img0: "https://cdn-thumbs.imagevenue.com/e5/d1/54/ME17DPIG_t.png",
    img1:"https://i.postimg.cc/zDxFv8Hx/jeans-428614-640.jpg",
    img2: "https://i.postimg.cc/9XtPmLDM/Add-a-heading-1.png"
  };
  const alt = {
    txt: "Mistore-img"
  }
  return (
    <>

      <div className="position-relative overflow-hidden p-3 p-md-5 text-center mt-5" id="landingPage">

        <div className="col-md-6 p-lg-3 mx-auto">

          <div className="d-flex justify-content-evenly gap-0 row" id="s-case">

            <div className="fs-4 text-white-50">

              Premium

              <br/>

              <p className="text-warning fs-4">Product collection</p>

            </div>

            <div className=" d-flex justify-content-center">

              <div className="fs-4 fw-bold mx-3">

              <span className="text-warning fs-5">4M+</span>

                <br/>

                <p className="fs-6 fw-bold text-white-50">Products delivered <FontAwesomeIcon icon={faShippingFast}/></p>

              </div>

              <div className="fs-4 fw-bold mx-3">

              <span className="text-warning fs-5">1M+</span>

                <br/>

                <p className="fs-5 fw-bold fs-6 text-white-50">New Articles <FontAwesomeIcon icon={faNewspaper}/></p>

              </div>

              <div className="fs-4 fw-bold mx-3">

              <span className="text-warning fs-5">6.4M+</span>

                <br/> 

                <p className="fs-5 fw-bold fs-6 text-white-50">Happy Customers <FontAwesomeIcon icon={faPerson}/></p>

              </div>

            </div>

          </div>

          <h1 className="display-3 fw-bold text-white">Unveiling Fashion <span id="ampersand">&</span> Technology</h1>

          <h3 className="fw-normal text-muted text-center text-white-50 mb-3" id="txt-media">

            Discover the fusion of style and innovation at Mi Store. Explore the latest in tech gadgets while embracing trendy fashion. Elevate your lifestyle with our cutting-edge tech and stylish apparel, defining a new era of modernity and elegance.

          </h3>

          <div className="d-flex gap-3 justify-content-center lead fw-normal">

            <Nav.Link to="/shop" as={Link} className="btn fw-bold fs-5 w-50" id="button">
              Shop with us
            </Nav.Link>

          </div>

        </div>

        <div className="product-device d-none d-md-block">

          <img src={landingImg.img0} alt={alt.txt} id="imgData" />

        </div>

      </div>

  

        {/* <Nav.Link to="/about" as={Link} className="btn fw-bold fs-5 w-50" id="button">
          Learn more
        </Nav.Link> */}


      {/* <Carousel className="bg-black" fade>

      <Carousel.Item>

        <div id="imge"></div>

        <Carousel.Caption>

          <h3 className="text-white">First slide label</h3>

          <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>

        <div id="imge"></div>

        <Carousel.Caption>

          <h3 className="text-white">Second slide label</h3>

          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>

        <div id="imge"></div>

        <Carousel.Caption>

          <h3 className="text-white">Third slide label</h3>

          <p className="text-white">

            Praesent commodo cursus magna, vel scelerisque nisl consectetur.

          </p>

        </Carousel.Caption>

      </Carousel.Item>

    </Carousel> */}

    </>
  )
}

export default Landing;
