import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
const DashBoard = () => {
  return (
    <>

      <div className="d-flex justify-content-center bg-body-tertiary">

      <div className="mt-5" id="s-bar">

          <SearchBar />

        </div>

      </div>

      <div className="for-media">

       <ProductList />

      </div>

    </>
  );
}

export default DashBoard;
