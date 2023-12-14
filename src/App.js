import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './Components/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import DashBoard from './Components/DashBoard';
import Cart from './Components/Cart';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import ProductFeat from './Components/ProductFeat';
import Footer from "./Components/Footer";

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>
      
      <Route index element={<Landing />}></Route>

      <Route path="/cart" element={<Cart />}></Route>

      <Route path="/shop" element={<DashBoard />}></Route>
      
      <Route path="/shop/:id/:title/:price" element={<ProductFeat />}></Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/contact" element={<ContactUs />}></Route>
      
      <Route path="/signUp" element={<SignUp />}></Route>

    </Route>

    
  ));


  return (
    <div className="App">

      <RouterProvider router={router} />

      <Footer />
      
    </div>
  );
}

export default App;
