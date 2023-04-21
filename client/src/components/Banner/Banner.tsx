// import important modules
import "./Banner.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
// images of the banner
import img1 from "../../assets/images/banner/bannerimg1.png";
import img2 from "../../assets/images/banner/bannerimg2.png";
import img3 from "../../assets/images/banner/bannerimg3.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  // get navigate from useNavigate
  const navigate = useNavigate();

  return (
    <section className="banner">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} className="banner-left">
            <div className="banner-left-content" data-aos="fade-right">
              <Typography variant="h2">
                We do not cook, we create your emotions!
              </Typography>
              <Typography variant="body1">
                Get ready for an extraordinary culinary adventure with Mr.
                Chef's artisanal approach to cooking. From classic favourites to
                daring new flavours, our delectable cuisine is guaranteed to
                tantalize your taste buds and leave you craving more.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<RestaurantMenuOutlinedIcon />}
                className="main-btn"
                onClick={() => navigate("/menu")}
              >
                Our Menu
              </Button>
            </div>
          </Grid>
          <Grid item md={6} className="banner-right" data-aos="fade-left">
            <div className="banner-right-content">
              <img src={img1} alt="bannerimg1" className="img1" />
              <img src={img2} alt="bannerimg2" className="img2" />
              <img src={img3} alt="bannerimg3" className="img3" />
              <div className="mc-circle-1"></div>
              <div className="mc-circle-2"></div>
              <div className="mc-circle-3"></div>
              <div className="mc-circle-4"></div>
              <div className="mc-circle-5"></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
