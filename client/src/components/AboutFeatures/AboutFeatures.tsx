// import important module
import "./AboutFeatures.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AboutFeaturesData from "../../assets/data/AboutInfoData.js";
import Typography from "@mui/material/Typography";

const AboutFeatures = () => {
  return (
    <section className="about-features">
      <Container>
        <Grid container spacing={7}>
          {AboutFeaturesData.map((data) => {
            return (
              <Grid item key={data.id} lg={6} sx={{ mt: 4 }} data-aos="zoom-in">
                <Grid container spacing={1}>
                  <div className="feature-container">
                    <Grid item lg={3} md={12} className="feature-left">
                      <Typography
                        variant="h2"
                        className="number-cursive"
                        sx={{ textAlign: "center" }}
                      >
                        {data.itemNumber}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={9}
                      md={12}
                      className="feature-right-container"
                    >
                      <div className="feature-right">
                        <Typography variant="h2"> {data.title} </Typography>
                        <Typography variant="body1"> {data.desc} </Typography>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default AboutFeatures;
