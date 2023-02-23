import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ReviewData from "../../assets/data/ReviewData";
import Rating from "@mui/material/Rating";
import "./Reviews.css";

import Grid from "@mui/material/Grid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Reviews = () => {
  return (
    <section className="review-section">
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Typography variant="h2"> Reviews About Us</Typography>
            <Typography variant="body1" className="review-section-desc">
              From mouth-watering dishes to top-notch service, see what our
              customers have to say about their visit to our restaurant.
            </Typography>{" "}
          </Grid>
        </Grid>

        {/* Swiper Grid */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="reviewer-slide"
        >
          {ReviewData.map((review) => {
            return (
              <SwiperSlide key={review.id} className="review-card neumorphic">
                <div className="content">
                  <div className="review-content">
                    <Typography variant="h4"> {review.title} </Typography>
                    <Rating
                      defaultValue={review.rating}
                      precision={0.1}
                      size="large"
                      readOnly
                    />
                    <Typography variant="body1" className="review-desc"> {review.desc} </Typography>
                  </div>
                  <div className="reviewer-info">
                    <img src={review.img} alt="reviewer" />
                    <Typography variant="body1" className="reviewer-name"> {review.name} </Typography>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Reviews;
