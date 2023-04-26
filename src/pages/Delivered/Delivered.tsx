import deliveredImg from "../../assets/images/delivered.gif";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loadingImg from "../../assets/images/loading.gif";
import "./Delivered.css";

const Delivered = () => {
  // navigate function
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // if the page is loading, state then it show the message loading
  if (isLoading) {
    return (
      <div className="loading-container">
        <img src={loadingImg} alt="loading-img" />
      </div>
    );
  }
  return (
    <section className="delivered-section" data-aos="fade-up">
      <div className="delivered-content">
        <img src={deliveredImg} alt="delivered-img" />
        <h2> We are Coming!!!</h2>
        <p>
          {" "}
          Thank you very much for ordering food from our website. Tonight we
          will deliver the food in your dreams{" "}
          <span aria-label="funny emoji" role="img" style={{ color: "red" }}>
            {`\u{1F602}`}
          </span>
        </p>
        <Button
          variant="contained"
          size="large"
          className="main-btn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default Delivered;
