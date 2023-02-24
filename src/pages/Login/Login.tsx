import Grid from "@mui/material/Grid";
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

const Login = () => {
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
              <form>
                {/* Email */}
                <TextField
                  label="Email"
                  variant="standard"
                  type="email"
                  fullWidth
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
                  fullWidth
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
                Already have an account?{" "}
                <NavLink to="/signup"> Sign Up </NavLink>
              </Typography>
              <div className="login-with-social-media">
                <Button variant="contained" type="submit" fullWidth>
                  Login with Google
                </Button>
                <Button variant="contained" type="submit" fullWidth>
                  Login with Facebook
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
