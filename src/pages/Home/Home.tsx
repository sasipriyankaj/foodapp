import AboutFeatures from "../../components/AboutFeatures/AboutFeatures";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import Banner from "../../components/Banner/Banner";
import FreeDeliverySection from "../../components/FastDeliverySection/FastDeliverySection";
import Navbar from "../../components/Navbar/Navbar";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutInfo />
      <AboutFeatures />
      <Reviews />
      <FreeDeliverySection />
    </>
  );
};

export default Home;
