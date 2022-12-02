import "./App.css";
import { BannerHover } from "./components/BannerHover";
import { BlogListing } from "./components/Blog/BlogListing";
import { Footer } from "./components/Footer";
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
        <ProductListing
          limit={3}
          title={"Sữa - Sản phẩm từ sữa"}
          showMoreButton={true}
        />
        <section className="section-index-collection">
          <div className="container">
            <BannerHover
              backgroundSrc={"/images/home_collection_5_image.jpg"}
              linkTo={"/collections/trai-cay"}
            />
          </div>
        </section>
        <ProductListing
          limit={3}
          title={"Sữa - Sản phẩm từ sữa"}
          showMoreButton={true}
        />
        <section className="section-index-latestBlog">
          <div className="container">
            <BlogListing />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
