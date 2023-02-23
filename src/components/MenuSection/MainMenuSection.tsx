import "./MainMenuSection.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuData from "../../assets/data/MenuItem";
import SingleMenuItem from "./SingleMenuItem";

const MainMenuSection = () => {
  return (
    <section className="menu-section">
      <Container>
        <div className="menu-section-top">
          <Typography variant="h2">Our Menu</Typography>
        </div>
        <Grid container spacing={4}>
          {MenuData.map((data) => {
            return <SingleMenuItem data={data} key={data.id} />;
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default MainMenuSection;
