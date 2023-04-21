// import important modules
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import aboutImage from "../../assets/images/about_info_image.jpg";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <section className="about-info">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} className="about-info-left" data-aos="fade-up">
            <div className="about-info-left-content">
              <img
                src={aboutImage}
                alt="about-info-image"
                className="main-img"
              />
              <div className="mc-about-circle-1"></div>
              <div className="mc-about-circle-2"></div>
              <div className="mc-about-circle-3"></div>
              <div className="mc-about-circle-4"></div>
              <div className="experience">
                <Typography variant="h2" className="number-cursive">
                  10
                </Typography>
                <Typography variant="body1"> Years of Experience</Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={6} className="about-info-right" data-aos="fade-up">
            <div className="about-info-right-content">
              <Typography variant="h2">
                We are doing more than you expect
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to Mr. Chef, a culinary experience like no other. Our
                restaurant is dedicated to bringing you the very best in fine
                dining, using the freshest ingredients and expertly crafted
                recipes to create a truly unforgettable dining experience.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our menu is a celebration of the world's most delicious
                cuisines, featuring a carefully curated selection of dishes from
                around the globe. Our experienced chefs bring a wealth of
                culinary knowledge and skill to the table, using traditional
                cooking techniques and modern flair to create dishes that are as
                beautiful as they are delicious. And our attentive servers are
                dedicated to providing you with a memorable dining experience,
                offering friendly and professional service that will make you
                feel right at home.
              </Typography>
              <Typography variant="body1" className="signature">
                Joy Dey
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutInfo;
