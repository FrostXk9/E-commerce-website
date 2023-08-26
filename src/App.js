import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './Components/RootLayout';
import DashBoard from './Components/DashBoard';
import Cart from './Components/Cart';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AddAddress from "./Components/AddAddress";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashBoard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/address" element={<AddAddress />}></Route>
    </Route>
  ));


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
