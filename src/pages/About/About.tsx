import AboutInfo from "../../components/AboutInfo/AboutInfo";
import SectionTop from "../../components/SectionTop/SectionTop";
import Box from "@mui/material/Box";
import AboutFeatures from "../../components/AboutFeatures/AboutFeatures";
import FastDeliverySection from "../../components/FastDeliverySection/FastDeliverySection";
import Reviews from "../../components/Reviews/Reviews";

const About = () => {
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
