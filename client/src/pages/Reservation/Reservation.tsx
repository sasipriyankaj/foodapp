// import important modules
import { useState, FormEvent, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import ReservationImg from "../../assets/images/reservation.gif";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import firebaseStorage from "../../firebase/firebaseStorage";
import "./Reservation.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import "react-phone-number-input/style.css";
import PhoneInput, {
  Country,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { useNavigate } from "react-router";
import "./Reservation.css";

const Reservation = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [person, setPerson] = useState("1");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined
  );

  // get user from store
  const { user } = useSelector((state: RootState) => state.user);

  //get Reserve Table Functionality from firebaseStorage
  const { reserveTable } = firebaseStorage();
  const navigate = useNavigate();

  function handleOnChangePhone(value: string | undefined) {
    if (value) {
      setPhone(value);
    }
  }

  function handleOnCountryChange(country: Country | undefined) {
    setSelectedCountry(country);
  }

  // disable past dates
  const disablePastDates = (date: Dayjs) => {
    return date.isBefore(dayjs(), "day");
  };

  // person select on handle change
  const handlePersonChange = (event: SelectChangeEvent) => {
    setPerson(event.target.value as string);
  };

  // handle reservation
  const handleReservation = (event: FormEvent<HTMLFormElement>) => {
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

    // get Data
    const reserveData = {
      date: `${value?.date()}/${value!.month() + 1}/${value?.year()}`,
      time: `${value?.format("hh:mm A")}`,
      name: user.displayName,
      email: user.email,
      phone,
      person,
      message,
    };

    // send data to firebase
    reserveTable(reserveData);

    // after successfully reservation, show a success message
    // show the successs message
    Swal.fire({
      icon: "success",
      title: "Reservation Confirmed!",
      text: "Your reservation has been added successfully!",
    });

    // clear message and set default person
    setMessage("");
    setPerson("1");

    // navigate to my reservation
    navigate("/myreservation");
  };

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="reservation-section">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} data-aos="fade-right">
            <div className="reservation-left">
              <img src={ReservationImg} alt="reservation-img" />
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className="reservation-right-container"
            data-aos="fade-left"
          >
            <div className="reservation-right">
              <Typography variant="h2">Reservation</Typography>
              <Typography variant="body1">
                Experience our delicious food by logging in now!
              </Typography>
              <form className="reservation-form" onSubmit={handleReservation}>
                {/* reservation period */}
                <div className="reservation-period">
                  {/* reservation date */}
                  <div className="reservation-date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DemoItem label="Reservation Date">
                          <DatePicker
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            shouldDisableDate={disablePastDates}
                            format="DD/MM/YYYY"
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>

                  {/* reservation time */}
                  <div className="reservation-time">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={["TimePicker", "MobileTimePicker"]}
                      >
                        <DemoItem label="Reservation Time">
                          <MobileTimePicker
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>

                  {/* People Reservation  */}
                  <div className="person-reservation">
                    <FormControl fullWidth>
                      <label htmlFor="person-reserve">Person</label>
                      <Select
                        id="person-reserve"
                        value={person}
                        onChange={handlePersonChange}
                        displayEmpty
                      >
                        <MenuItem value="1"> One Person </MenuItem>
                        <MenuItem value="2"> Two Person </MenuItem>
                        <MenuItem value="3"> Three Person </MenuItem>
                        <MenuItem value="4"> Four Person </MenuItem>
                        <MenuItem value="5"> Five Person </MenuItem>
                        <MenuItem value="6"> Six Person </MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* mobile number */}
                  <div className="mobile-number">
                    <label htmlFor="mobile">Mobile Number</label>
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

                  {/* Comments */}
                  <TextField
                    label="Comments"
                    placeholder="You can add your query or addition information about reservation in this comment section"
                    className="reservation-comment"
                    variant="standard"
                    type="text"
                    name="comments"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={8}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </div>
                {/* Submit Form Button */}
                <Button
                  variant="contained"
                  type="submit"
                  className="main-btn checkout-btn"
                  fullWidth
                >
                  Book a table
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Reservation;
