import Grid from "@mui/material/Grid";
import { MenuType } from "../../assets/data/MenuItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

// single menu item props type
type SingleMenuItemProps = {
  data: MenuType;
};

const SingleMenuItem = ({ data }: SingleMenuItemProps) => {
  return (
    <Grid item md={4}>
      <Card className="single-card neumorphic" sx={{ height: "100%" }}>
        <CardMedia component="img" image={data.img} title={data.title} />
        <CardContent>
          <Typography gutterBottom variant="h2">
            {data.title}
          </Typography>
          <Typography variant="body2">{data.desc}</Typography>
          <Typography variant="h4">
            Price: <span> ${data.price} </span>{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            className="main-btn"
          >
            Order Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleMenuItem;
