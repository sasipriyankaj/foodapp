import Grid from "@mui/material/Grid";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
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
import googleIcon from "../../assets/images/icons/google.svg";
import firebaseAuth from "../../firebase/firebaseAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Login = () => {
  // important states
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const { logInUser, googleLogin } = firebaseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // Get user from store
  const { user } = useSelector((state: RootState) => state.user);

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

    // check if the state object contains a 'from' location
    const { from = { pathname: "/" } } = location.state || {};

    // send data to firebase and start the login process
    logInUser(userLoginData.email, userLoginData.password, from);

    // clear the form
    setUserLoginData({
      email: "",
      password: "",
    });

    // // redirect the user to the 'from' location if it exists, or to the default route otherwise
    // navigate(from ? from.pathname : "/", { replace: true });
  };

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="login-section">
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} data-aos="fade-right">
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
                  disabled={!!user.email}
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
                  disabled={!!user.email}
                >
                  <span>
                    <img src={googleIcon} alt="google-icon" />{" "}
                  </span>
                  <span> Continue with Google</span>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={6} data-aos="fade-left">
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
