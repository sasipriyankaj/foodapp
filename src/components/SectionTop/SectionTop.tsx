import { Typography } from "@mui/material";
import "./SectionTop.css";
import NavLink from "../NavLink/NavLink";

// type of SectionTopProps
type SectionTopProps = {
  title: string;
};

const SectionTop = ({ title }: SectionTopProps) => {
  return (
    <section className="section-top" data-aos="fade-down">
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">
        {" "}
        <NavLink to="/" className="home-text-link">
          Home
        </NavLink>{" "}
        / {title}
      </Typography>
    </section>
  );
};

export default SectionTop;
