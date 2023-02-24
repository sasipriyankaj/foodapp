import "./Banner.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import img1 from "../../assets/images/banner/bannerimg1.png";
import img2 from "../../assets/images/banner/bannerimg2.png";
import img3 from "../../assets/images/banner/bannerimg3.png";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} className="banner-left">
            <div className="banner-left-content">
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
                endIcon={<SendIcon />}
                className="main-btn"
              >
                Our Menu
              </Button>
            </div>
          </Grid>
          <Grid item md={6} className="banner-right">
            <div className="banner-right-content">
              <img src={img1} alt="bannerimg1" className="img1" />
              <img src={img2} alt="bannerimg2" className="img2" />
              <img src={img3} alt="bannerimg3" className="img3" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
