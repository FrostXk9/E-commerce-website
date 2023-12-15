import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
const DashBoard = () => {
  return (
    <>
    <div className="mt-5">
    <SearchBar />
    </div>
      <ProductList />
    </>
  );
}

export default DashBoard;
