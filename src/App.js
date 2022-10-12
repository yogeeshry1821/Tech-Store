import "./App.css";
import Pnavbar from "./components/Pnavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccesoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <Router>
      <Pnavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route path = "/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
      </Routes>
      <Routes>
        <Route path = "/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
      </Routes>
      <Routes>
        <Route path = "/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
      </Routes>
      <Routes>
        <Route path = "/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
      </Routes>
      <Routes>
        <Route path = "/moblieAccessories" element={<HotAccessories moblieAccessories={data.hotAccessories.mobileAccessories} moblieAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>
      
      <Heading text={"Product Reviews"}/>
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text={"Videos"}/>
      <Videos videos={data.videos}/>

      <Footer/>

    </Router>
  );
}

export default App;
