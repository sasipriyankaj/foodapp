import { useState, useRef, ChangeEvent } from "react";
import "./Register.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/images/logo.png";

const Register = () => {
  // important states
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // image upload function
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      setImage(null);
      fileInputRef.current && (fileInputRef.current.value = "");
      return;
    }

    setImage(file && URL.createObjectURL(file));
  };

  return (
    <section className="register-section">
      <Container>
        <div className="register-content">
          <img src={logo} alt="logo" className="register-logo" />
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Register Now!!
          </Typography>
          <Typography variant="body1">
            Join our community of food lovers and start enjoying exclusive
            benefits today!
          </Typography>

          {/* Register Form */}
          <form>
            {/* Name */}
            <TextField
              label="Name"
              variant="standard"
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

            {/* image */}
            <TextField
              label="Upload Image"
              variant="standard"
              type="file"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddAPhotoIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleImageUpload}
              inputRef={fileInputRef}
            />
            {image && <img src={image} alt="Preview" className="preview-img" />}

            {/* Submit Form Button */}
            <Button
              variant="contained"
              type="submit"
              className="main-btn"
              fullWidth
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
