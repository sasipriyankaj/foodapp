// import important modules
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import fastDeliveryImage from "../../assets/images/delivery.png";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router";
import "./FastDeliverySection.css";

const FastDeliverySection = () => {
  // get navigate from react router
  const navigate = useNavigate();

  return (
    <section className="fast-delivery-section">
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} className="fast-delivery-left">
            <div className="content" data-aos="zoom-in">
              <Typography variant="h2">Fast delivery service. </Typography>
              <Typography variant="body1">
                Enjoy the convenience of fast delivery with our restaurant's
                online ordering system. Our Fast delivery section features a
                variety of delicious menu items that are eligible for delivery
                at no extra charge.{" "}
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                className="main-btn"
                onClick={() => navigate("/menu")}
              >
                Order Now
              </Button>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="fast-delivery-right" data-aos="zoom-in">
              <img src={fastDeliveryImage} alt="fast-delivery-image" />
              <div className="delivery-circle-1"></div>
              <div className="delivery-circle-2"></div>
              <div className="delivery-circle-3"></div>
              <div className="delivery-circle-4"></div>
              <div className="delivery-circle-5"></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FastDeliverySection;
