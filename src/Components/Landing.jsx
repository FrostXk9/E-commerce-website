import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Landing = () => {
  const landingImg = {
    img1:"https://i.postimg.cc/zDxFv8Hx/jeans-428614-640.jpg",
    img2: "https://i.postimg.cc/9XtPmLDM/Add-a-heading-1.png"
  };
  return (
    <>

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary mt-5" id="landingPage">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Designed for engineers</h1>
          <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">

            <Nav.Link to="/about" as={Link} className="btn fw-normal fs-5 btn-dark w-50">
              Learn more
            </Nav.Link>

            <Nav.Link to="/shop" as={Link} className="btn fw-normal fs-5 btn-dark w-50">
              Buy
            </Nav.Link>

          </div>

        </div>

        <div className="product-device shadow-sm d-none d-md-block"></div>

        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>

      </div>

      <div className="m-5">

        <div className="container-fluid d-flex justify-content-evenly" id="landingSection2">

          <div className="container">

            <div className='d-flex justify-content-center p-1'>
              
              <img src={landingImg.img1} className="img img-fluid" alt="logo" id='img'/>

            </div>

            <h2 className="text-center text-black">Unmatched quality meets unmatched style</h2>

          </div>

          <div className="container">
              
            <div className='d-flex justify-content-center p-1'>

              <img src={landingImg.img2} className="img img-fluid" alt="logo" id='img'/>

            </div>

            <h2 className="text-center text-black">Lorem Ipsum</h2>

          </div>

        </div>

      </div>

    </>
  )
}

export default Landing;
