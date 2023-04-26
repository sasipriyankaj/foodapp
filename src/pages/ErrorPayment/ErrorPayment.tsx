import failedPayment from "../../assets/images/payment-error.jpg";
import "./ErrorPayment.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const ErrorPayment = () => {
  // navigate function
  const navigate = useNavigate();

  return (
    <section className="error-payment-section" data-aos="fade-up">
      <div className="error-payment-content">
        <div className="error-img">
          <img src={failedPayment} alt="failed-img" />
        </div>
        <div className="error-content">
          <h2> Payment Cancelled!</h2>
          <p>
            We are sorry, but your payment did not go through. Please ensure
            that your payment information is correct and try again. If you need
            further assistance, please contact us.
          </p>
          <Button
            variant="contained"
            size="large"
            endIcon={<ShoppingCartIcon />}
            className="main-btn"
            onClick={() => navigate("/cart")}
          >
            Back to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPayment;
