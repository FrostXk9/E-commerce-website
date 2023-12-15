import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

function NavScrollExample() {
    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); // Initially, display all products
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const storeLogo = {
        logo: "https://i.postimg.cc/ydzTYtBf/Add-a-heading.png",
        logoAlt: "MiLogo"
    }

    return (
         <>
            <Navbar expand="lg" className="bg-white mt-5">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={storeLogo.logo} alt={storeLogo.logoAlt} id="imglogo" style={{height: "41px", width: "200px" , marginTop: "5px"}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex mt-2">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="text-center" id="showResults">

                {/* Display filtered products */}
                {searchQuery === 0 ? filteredProducts.map((product) => (

                    <div className="" style={{overflow: "scroll", height: "50px"}} key={product.id}>{product.title}</div>

                )) : filteredProducts.map((product) => (

                    <div className="" style={{overflow: "scroll", height: "50px"}} key={product.id}>
                        <img src={product.image} alt="" />
                        {product.title}
                    </div>
                            
                )) ? searchQuery != 0 ? filteredProducts.map((product) => (

                    <div className="container-fluid" key={product.id}>
                        <div className="d-flex justify-content-center">

                        <img src={product.image} alt="" style={{ width: '100px', height: '130px'}} />

                        </div>
                        <div className="fs-6" style={{overflow: "scroll", maxHeight:"45px"}}>

                        {product.title}

                        </div>
                    </div> 
                    // initially returns only this result
                            
                )) : console.log("Search fired!") : console.log("empty?")}

            </div>
        </>
    );
}

export default NavScrollExample;
