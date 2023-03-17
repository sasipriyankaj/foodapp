import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const Reservation = () => {
  return (
    <section className="reservation-section">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <div className="reservation-left"></div>
          </Grid>
          <Grid item md={6}>
            <div className="reservation-right"></div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Reservation;
