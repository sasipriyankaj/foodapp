// import important modules
import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import "react-phone-number-input/style.css";
import PhoneInput, {
  Country,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SignpostIcon from "@mui/icons-material/Signpost";
import { useSelector } from "react-redux";
import { CartItem } from "../../redux/features/menuSlice";
import type { RootState } from "../../redux/store/store";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import deliveryImg from "../../assets/images/delivery-details.gif";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import "./Delivery.css";

const Delivery = () => {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined
  );
  const [deliveryOptions, setDeliveryOptions] = useState({
    city: "",
    road: "",
    deliveryInfo: "",
  });

  // get cart and user from store
  const { user } = useSelector((state: RootState) => state.user);
  const cart: CartItem[] = useSelector(
    (state: RootState) => state.menu.cart
  ) as CartItem[];

  function handleOnChangePhone(value: string | undefined) {
    if (value) {
      setPhone(value);
    }
  }

  function handleOnCountryChange(country: Country | undefined) {
    setSelectedCountry(country);
  }

  // checkout stripe handle
  const checkOutHandle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // phone number checking
    if (phone === "" || phone === undefined) {
      // show the error message
      Swal.fire({
        icon: "error",
        title: "Something Wrong!",
        text: `Phone number is required!`,
      });
      return;
    }

    // checking the validity
    if (!(phone && isPossiblePhoneNumber(phone))) {
      // show the error message
      Swal.fire({
        icon: "error",
        title: "Something Wrong!",
        text: `The phone number is not valid!`,
      });
      return;
    }

    // get all the information
    const orderInformation = {
      user,
      cart,
      city: deliveryOptions.city,
      road: deliveryOptions.road,
      deliveryInfo: deliveryOptions.deliveryInfo,
      email: user.email,
      phone,
    };

    // post data
    await fetch("https://mrchef.onrender.com/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInformation),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // handle change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // get name and value
    const { name, value } = event.target;

    setDeliveryOptions({ ...deliveryOptions, [name]: value });
  };

  return (
    <section className="delivery-section">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} className="delivery-left" data-aos="fade-right">
            <div>
              <img src={deliveryImg} alt="delivery-bike-gif" />
            </div>
          </Grid>
          <Grid item md={6} data-aos="fade-left">
            <div className="delivery-right">
              <Typography variant="h2"> Delivery Details</Typography>
              <Typography variant="body1" color="initial">
                Fast, easy, and delicious delivery right to your doorstep.
              </Typography>
              <form onSubmit={checkOutHandle}>
                {/* Email */}
                <TextField
                  label="Email"
                  placeholder="Email Address"
                  variant="standard"
                  type="email"
                  name="email"
                  value={user.email}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                    readOnly: true,
                  }}
                />
                {/* City */}
                <TextField
                  label="City"
                  placeholder="Name of the City"
                  variant="standard"
                  type="text"
                  name="city"
                  fullWidth
                  required
                  value={deliveryOptions.city}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* Road */}
                <TextField
                  label="Road"
                  placeholder="Road/ Street Number"
                  variant="standard"
                  type="text"
                  name="road"
                  fullWidth
                  required
                  value={deliveryOptions.road}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SignpostIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* mobile number */}
                <div className="mobile-number">
                  <label htmlFor="mobile">Mobile Number *</label>
                  <PhoneInput
                    id="mobile"
                    placeholder="Enter phone number"
                    defaultCountry="BD"
                    international
                    countryCallingCodeEditable={false}
                    value={phone}
                    onChange={handleOnChangePhone}
                    onCountryChange={handleOnCountryChange}
                  />
                </div>

                {/* Additional Delivery information */}
                <TextField
                  label="Delivery Instructions"
                  placeholder="Please give more detailed delivery instructions"
                  variant="standard"
                  type="text"
                  name="deliveryInfo"
                  multiline
                  required
                  rows={8}
                  fullWidth
                  value={deliveryOptions.deliveryInfo}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />

                {/* Checkout  */}
                <Button
                  variant="contained"
                  size="medium"
                  className="main-btn checkout-btn"
                  type="submit"
                  fullWidth
                  endIcon={<KeyboardTabOutlinedIcon />}
                >
                  Checkout
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Delivery;
