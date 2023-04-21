import { MouseEvent } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import { MenuType } from "./MainMenuSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { addToCart, CartItem } from "../../redux/features/menuSlice";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// single menu item props type
type SingleMenuItemProps = {
  data: MenuType;
};

const SingleMenuItem = ({ data }: SingleMenuItemProps) => {
  // get cart from store
  const cart = useSelector((state: RootState) => state.menu.cart) as CartItem[];
  // get dispatch function
  const dispatch = useDispatch();

  // add to Cart functionality
  const addToCartFunc = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // check if the item is on the cart, add one quantity and if it is not on the cart, add a quantity property
    if (cart.find((item) => item.id === data.id)) {
      // item is on the cart
      const addOneMoreItem = cart.map((item) => {
        if (item.id === data.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      // add to the store
      dispatch(addToCart(addOneMoreItem));
    } else {
      // brand new item will be added where the quantity will be 1
      const newItem = [
        ...cart,
        {
          id: data.id,
          title: data.title,
          img: data.img,
          price: data.price,
          quantity: 1,
          appID: data.appID,
        },
      ];

      // add to store
      dispatch(addToCart(newItem));
    }

    // after successfully added to cart, show a success message
    // show the successs message
    Swal.fire({
      icon: "success",
      title: "Cart updated!",
      text: `${data.title} has been added to the cart.`,
    });
  };

  return (
    <Grid item md={6} lg={4} data-aos="fade-up">
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
            onClick={addToCartFunc}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleMenuItem;
