import { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";
import "./Register.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/images/logo.png";
import firebaseAuth from "../../firebase/firebaseAuth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useLocation } from "react-router-dom";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Register = () => {
  // important states
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // get register User function from firebase auth
  const { registerUser } = firebaseAuth();

  // get user from store
  const { user } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  // Handle input change function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUserData({ ...newUserData, [event.target.name]: event.target.value });
  };

  // Register Submit functionality
  const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
    // stop reloading the website
    event.preventDefault();

    // checking password length
    if (newUserData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Something Wrong!",
        text: "Password length must be at least six characters.",
      });
      return;
    }

    // check if the state object contains a 'from' location
    const { from = { pathname: "/" } } = location.state || {};

    // send the data to the firebase and create a new user
    registerUser(
      newUserData.name,
      newUserData.email,
      newUserData.password,
      from
    );

    // clear the input form
    setNewUserData({ name: "", email: "", password: "" });
  };

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="register-section">
      <Container>
        <div className="register-content"  data-aos="fade-up">
          <img src={logo} alt="logo" className="register-logo" />
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Register Now!!
          </Typography>
          <Typography variant="body1">
            Join our community of food lovers and start enjoying exclusive
            benefits today!
          </Typography>

          {/* Register Form */}
          <form onSubmit={handleRegisterSubmit}>
            {/* Name */}
            <TextField
              label="Name"
              variant="standard"
              value={newUserData.name}
              onChange={handleChange}
              name="name"
              type="text"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* Email */}
            <TextField
              label="Email"
              variant="standard"
              type="email"
              value={newUserData.email}
              onChange={handleChange}
              name="email"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* Password */}
            <TextField
              label="Password"
              variant="standard"
              type="password"
              value={newUserData.password}
              onChange={handleChange}
              name="password"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* Submit Form Button */}
            <Button
              variant="contained"
              type="submit"
              className="main-btn"
              fullWidth
              disabled={!!user.email}
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
