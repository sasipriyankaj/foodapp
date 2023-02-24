import "./Register.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";

const Register = () => {
  return (
    <section className="register-section">
      <Container maxWidth="xs">
        <div className="register-content">
          <Typography variant="h2">Register Now</Typography>
          <Typography variant="body1">Register Now</Typography>

          {/* Register Form */}
          <form>
            {/* Name */}
            <TextField
              label="Name"
              variant="standard"
              type="text"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
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
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
