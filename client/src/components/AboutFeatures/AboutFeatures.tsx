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
              <Grid item key={data.id} md={4}>
                <Grid container spacing={1}>
                  <Grid item xs={3} className="feature-left">
                    <Typography variant="h2" className="number-cursive">
                      {data.itemNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <div className="feature-right">
                      <Typography variant="h2"> {data.title} </Typography>
                      <Typography variant="body1"> {data.desc} </Typography>
                    </div>
                  </Grid>
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
