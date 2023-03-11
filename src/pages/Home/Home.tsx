import { useEffect } from "react";
import AboutFeatures from "../../components/AboutFeatures/AboutFeatures";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import Banner from "../../components/Banner/Banner";
import FreeDeliverySection from "../../components/FastDeliverySection/FastDeliverySection";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
