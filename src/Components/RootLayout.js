import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";

import NavbarLayout from "./Navbar";

const RootLayout = () => {
  return (
  <>
    <Provider store={Store}>
      <NavbarLayout />
      <main>
        <Outlet />
      </main>
      
    </Provider>
  </>
  )
}

export default RootLayout;
