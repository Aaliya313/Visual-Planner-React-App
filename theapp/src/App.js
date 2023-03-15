/** @format */

import "./App.css";
import Header from "./components/header/Header";
import CarouselSection from "./components/carousel/Carousel";
import MainCards from "./components/mainCards/mainCards";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselSection />
      <br />
      <MainCards />
      <br />
      <Footer />
    </div>
  );
}

export default App;
