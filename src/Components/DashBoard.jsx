import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
const DashBoard = () => {
  return (
    <>
    <div className="mt-5" id="s-bar">
    <SearchBar />
    </div>
      {/* <ProductList /> */}
      <div className="for-media">
      <ProductList />
      </div>
    </>
  );
}

export default DashBoard;
