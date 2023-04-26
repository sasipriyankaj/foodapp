import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import SectionTop from "../../components/SectionTop/SectionTop";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  CartItem,
  updateCart,
  couponApply,
  clearCart,
  couponRemove,
} from "../../redux/features/menuSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import type { AppDispatch, RootState } from "../../redux/store/store";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TableHead from "@mui/material/TableHead";
import Grid from "@mui/material/Grid";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import emptyCart from "../../assets/images/emptycart.gif";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import "./Cart.css";

const Cart = () => {
  // get cart and coupon functionality from store
  const cart: CartItem[] = useSelector(
    (state: RootState) => state.menu.cart
  ) as CartItem[];
  const couponState = useSelector(
    (state: RootState) => state.menu.isCouponApplied
  );

  // get navigate from react router
  const navigate = useNavigate();

  // dispatch function
  const dispatch: AppDispatch = useDispatch();

  // important states
  const [cartList, setCartList] = useState(cart);
  const [coupon, setCoupon] = useState("");
  const [shipAmount, setShipAmount] = useState(5);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // get subTotal of cart
  const getSubTotal = () => {
    if (couponState) {
      setSubTotal(0);
    } else {
      setSubTotal(() => {
        let total: number = 0;
        cartList.forEach((cart) => {
          total += cart.quantity * cart.price;
        });
        return total;
      });
    }
  };

  // get Total
  const getTotal = () => {
    if (couponState) {
      setTotal(0);
    } else {
      let subAmount: number = subTotal;
      let deliveryCharge: number = shipAmount;
      let totalAmount: number = subAmount + deliveryCharge;
      setTotal(totalAmount);
    }
  };

  // show the total when the page load, and according to some state
  useEffect(() => {
    getSubTotal();
    getTotal();
  }, [cartList, subTotal, shipAmount, coupon]);

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // handle quantity input
  const handleQuantityInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const value = Number(event.target.value);

    // set the cartlist
    setCartList((prevCart) => {
      const cart = [...prevCart];
      let updatedCartItem;
      if (value > 0) {
        updatedCartItem = {
          ...cart[index],
          quantity: value,
        };
      } else {
        updatedCartItem = {
          ...cart[index],
          quantity: 1,
        };
      }
      cart[index] = updatedCartItem;

      // update the store with the data
      dispatch(updateCart(cart));
      return cart;
    });
  };

  // decrease quantity
  const decreaseQuantity = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();

    // set new cart, where i will find the cart by searching with index, and add the quantity
    setCartList((prevCart) => {
      const cart = [...prevCart];
      const updatedCartItem = {
        ...cart[index],
        quantity: cart[index].quantity - 1,
      };
      cart[index] = updatedCartItem;

      // update the store with the data
      dispatch(updateCart(cart));
      return cart;
    });
  };

  // increase quantity
  const increaseQuantity = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();

    // set new cart, where i will find the cart by searching with index, and add the quantity
    setCartList((prevCart) => {
      const cart = [...prevCart];
      const updatedCartItem = {
        ...cart[index],
        quantity: cart[index].quantity + 1,
      };
      cart[index] = updatedCartItem;

      // update the store with the data
      dispatch(updateCart(cart));
      return cart;
    });
  };

  // remove item from the cart
  const removeItem = (event: MouseEvent<HTMLButtonElement>, item: CartItem) => {
    event.preventDefault();

    // modal open, if the press delete, the item will be deleted
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete button pressed, so showing the data without the specific item
        // remove the object and set the updated array of cart
        const filteredData = cartList.filter(
          (singleItem) => singleItem.id !== item.id
        );

        // set the updated cart
        setCartList(filteredData);

        // update the store
        dispatch(updateCart(filteredData));

        // success message
        Swal.fire(
          "Deleted!",
          `${item.title} have been removed from the cart.`,
          "success"
        );
      }
    });
  };

  // handle Coupon
  const handleCoupon = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (coupon === "") {
      // show the error message
      Swal.fire({
        icon: "error",
        title: "Something Wrong!",
        text: `You didn't put any Code!`,
      });
    } else if (coupon === "treat") {
      setShipAmount(0);
      setIsCouponApplied(true);
      dispatch(couponApply(true));
      // show the successs message
      Swal.fire({
        icon: "success",
        title: "Coupon Applied!",
        text: `Enjoy our delicious food items without any cost to you!`,
      });
      setCoupon("");
    } else {
      // show the error message
      Swal.fire({
        icon: "error",
        title: "Something Wrong!",
        text: `This is not a valid coupon code`,
      });
    }
  };

  // if cart list is empty, show empty cart icon with text
  if (cartList.length === 0) {
    return (
      <>
        <SectionTop title="Cart" />
        <div className="empty-cart-container" data-aos="zoom-in">
          <div>
            <img src={emptyCart} alt="empty-cart" />
            <p> No item added to the cart! </p>
            <Button
              variant="contained"
              size="medium"
              className="main-btn back-to-menu"
              endIcon={<RestaurantMenuOutlinedIcon />}
              onClick={() => navigate("/menu")}
              style={{ fontSize: "1.7rem" }}
            >
              Back to menu
            </Button>
          </div>
        </div>
      </>
    );
  }

  // handle continue btn
  const handleContinueBtn = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking if the coupon applied or not
    if (couponState) {
      dispatch(clearCart());
      dispatch(couponRemove(false));
      navigate("/delivered");
    } else {
      navigate("/delivery");
    }
  };

  return (
    <section className="cart-section">
      <SectionTop title="Cart" />
      <Container>
        <TableContainer data-aos="zoom-in-down">
          <Table sx={{ minWidth: 650 }}>
            {cartList.length > 0 && (
              <TableHead>
                <TableRow>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {cartList.length > 0 &&
                cartList.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="cell-width" align="center">
                      <img src={item.img} alt="cart-food-img" />
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <p> {item.title} </p>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <div className="quantity-box">
                        {/* decrease quantity */}
                        <Button
                          variant="contained"
                          size="medium"
                          className={
                            item.quantity === 1
                              ? "main-btn event-none"
                              : "main-btn"
                          }
                          onClick={(e) => decreaseQuantity(e, index)}
                        >
                          -
                        </Button>
                        {/* quantity show element */}
                        <TextField
                          type="number"
                          name="quantity"
                          value={item.quantity}
                          onChange={(e) => handleQuantityInput(e, index)}
                          inputProps={{
                            min: 1,
                          }}
                          className="quantity-input"
                        />
                        {/* increase quantity */}
                        <Button
                          variant="contained"
                          size="medium"
                          className="main-btn"
                          onClick={(e) => increaseQuantity(e, index)}
                        >
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <p>${(item.price * item.quantity).toFixed(2)} </p>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <Tooltip title="Delete">
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={(e) => removeItem(e, item)}
                        >
                          <DeleteIcon fontSize="inherit" className="del-icon" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {cartList.length > 0 && (
          <Grid
            container
            spacing={4}
            className="coupon-total-container"
            data-aos="fade-right"
          >
            <Grid item xs={12} md={7}>
              <div className="coupon-container">
                <TextField
                  type="text"
                  onChange={(e) => setCoupon(e.target.value)}
                  value={coupon}
                  placeholder="Enter Coupon Code"
                  className="coupon-input"
                  InputProps={{
                    readOnly: couponState && true,
                  }}
                />
                <Button
                  variant="contained"
                  size="medium"
                  className="main-btn coupon-btn"
                  onClick={handleCoupon}
                  disabled={couponState && true}
                >
                  Apply coupon
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={5} className="total-container-right">
              <div className="total-container" data-aos="fade-left">
                <div className="subtotal-container">
                  <p> Subtotal </p>
                  <h4> ${subTotal.toFixed(2)} </h4>
                </div>
                <div className="shipping-container">
                  <p> Delivery Charge </p>
                  <h4> ${shipAmount.toFixed(2)} </h4>
                </div>
                <div className="main-total-container">
                  <p> Total </p>
                  <h4 className="total-text"> ${total.toFixed(2)} </h4>
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  size="medium"
                  className="main-btn checkout-btn"
                  fullWidth
                  endIcon={<KeyboardTabOutlinedIcon />}
                  onClick={handleContinueBtn}
                >
                  Continue
                </Button>
              </div>
            </Grid>
          </Grid>
        )}
      </Container>
    </section>
  );
};

export default Cart;
