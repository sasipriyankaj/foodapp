import failedPayment from "../../assets/images/failed_payment.gif";
import "./ErrorPayment.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ErrorPayment = () => {
  return (
    <section className="error-payment-section">
      <div className="error-payment-content">
        <div className="error-img">
          <img src={failedPayment} alt="failed-img" />
        </div>
        <div className="error-content">
          <h2> Payment Cancelled!</h2>
          <p>
            We are sorry, but your payment did not go through. Please ensure
            that your payment information is correct and try again. If you need
            further assistance, please contact our support team
          </p>
          <Button
            variant="contained"
            size="large"
            endIcon={<ShoppingCartIcon />}
            className="main-btn"
          >
            Back to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPayment;
