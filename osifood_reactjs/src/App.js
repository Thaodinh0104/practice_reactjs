import "./App.css";
import Header from "./components/Header/Header";
import { HomeSlider } from "./components/Home/HomeSlider";
import { ProductListing } from "./components/Product/ProductListing";
import "./styles/base.scss";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="wrap-contents">
        <HomeSlider />
        <ProductListing
          limit={3}
          title={"Sản phẩm nổi bật"}
          showMoreButton={true}
        />
        <ProductListing limit={3} title={"Rau củ quả"} showMoreButton={true} />
        <ProductListing
          limit={3}
          title={"Thịt, cá, hải sản"}
          showMoreButton={true}
        />
        <ProductListing
          limit={3}
          title={"Sữa - Sản phẩm từ sữa"}
          showMoreButton={true}
        />
      </div>
    </div>
  );
}

export default App;
