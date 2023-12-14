import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
const DashBoard = () => {
  return (
    <>
    <div className="mt-5 d-flex justify-content-center">
    <SearchBar />
    </div>
      <ProductList />
    </>
  );
}

export default DashBoard;
