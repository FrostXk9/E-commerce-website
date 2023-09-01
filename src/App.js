import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './Components/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import DashBoard from './Components/DashBoard';
import Cart from './Components/Cart';
import AddAddress from "./Components/AddAddress";
import AddPayment from './Components/AddPayment';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashBoard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/address" element={<AddAddress />}></Route>
      <Route path="/payment" element={<AddPayment />}></Route>
    </Route>
  ));


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
