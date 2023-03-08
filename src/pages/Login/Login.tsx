import Grid from "@mui/material/Grid";
import { useState, ChangeEvent, FormEvent } from "react";
import "./Login.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import loginImage from "../../assets/images/login.jpg";
import NavLink from "../../components/NavLink/NavLink";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import googleIcon from "../../assets/images/icons/google.svg";
import firebaseAuth from "../../firebase/firebaseAuth";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Login = () => {
  // important states
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const { logInUser, googleLogin, facebookLogin } = firebaseAuth();

  // handle change functionality
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // set the data to the userLoginData state
    setUserLoginData({
      ...userLoginData,
      [event.target.name]: event.target.value,
    });
  };

  //User Login functionality
  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // checking password length
    if (userLoginData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Something Wrong!",
        text: "Password length must be at least six characters.",
      });
      return;
    }

    // send data to firebase and start the login process
    logInUser(userLoginData.email, userLoginData.password);

    // clear the form
    setUserLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <section className="login-section">
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <div className="login-left-content">
              <Typography variant="h2">Login</Typography>
              <Typography variant="body1">
                Experience our delicious food by logging in now!
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                {/* Email */}
                <TextField
                  label="Email"
                  placeholder="Email Address"
                  variant="standard"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={userLoginData.email}
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
                  placeholder="Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={userLoginData.password}
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
                >
                  Login
                </Button>
              </form>
              {/*  Sign Up/ Do Registration Text*/}
              <Typography variant="h4">
                Don't have an account?{" "}
                <NavLink to="/register"> Register Now </NavLink>
              </Typography>
              <div className="login-with-social-media">
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  onClick={googleLogin}
                >
                  <span>
                    <img src={googleIcon} alt="google-icon" />{" "}
                  </span>
                  Continue with Google
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  onClick={facebookLogin}
                >
                  <span>
                    <img src={facebookIcon} alt="facebook-icon" />
                  </span>
                  Continue with Facebook
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="login-right-content">
              <img src={loginImage} alt="login-image" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Login;
