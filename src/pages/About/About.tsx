import AboutInfo from "../../components/AboutInfo/AboutInfo";
import SectionTop from "../../components/SectionTop/SectionTop";
import Box from "@mui/material/Box";
import AboutFeatures from "../../components/AboutFeatures/AboutFeatures";
import FastDeliverySection from "../../components/FastDeliverySection/FastDeliverySection";
import Reviews from "../../components/Reviews/Reviews";
import { useEffect } from "react";

const About = () => {
  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionTop title="About Us" />
      <Box sx={{ marginTop: "10em" }}>
        <AboutInfo />
        <AboutFeatures />
        <Reviews />
      </Box>
      <FastDeliverySection />
    </>
  );
};

export default About;
