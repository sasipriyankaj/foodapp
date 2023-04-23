// import important modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import { CartItem, clearCart } from "../../redux/features/menuSlice";
import firebaseStorage from "../../firebase/firebaseStorage";
import SectionTop from "../../components/SectionTop/SectionTop";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { OrderDataProps } from "../../firebase/firebaseStorage";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import loadingImg from "../../assets/images/loading.gif";
import emptyCart from "../../assets/images/emptycart.gif";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import "./MyOrder.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

interface MyOrderData extends OrderDataProps {
  date: string;
  time: string;
  id: string;
  dateInfo: string;
  createdAt: string;
}

const MyOrder = () => {
  // important states and variables
  const [currentOrder, setCurrentOrder] = useState({});
  const [allOrder, setAllOrder] = useState<MyOrderData[]>([]);
  const dispatch = useDispatch();
  const { setOrder, getOrders, orderDelete } = firebaseStorage();
  const [loading, setLoading] = useState(false);
  // Get user from store
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const successNotification = () => {
    Swal.fire({
      icon: "success",
      title: "Payment Confirmed",
      text: "Your order is on the way!!!",
    });
  };

  const getCurrentOrder = () => {
    setLoading(true);
    fetch("https://mrchef.onrender.com/myorder")
      .then((response) => response.json())
      .then((data) => {
        if (data.phone) {
          setCurrentOrder(data);
          // set the order to firebase
          setOrder(data);
          setLoading(false);
          //   clear the cart
          dispatch(clearCart());
          successNotification();
        }
      })
      .catch((error) => console.error(error));
  };

  const getAllOrder = async () => {
    const orders = await getOrders(user.email);
    const formattedOrders: MyOrderData[] = orders.map((order: any) => {
      return {
        ...order,
        date: order.dateInfo.toDate().toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        time: order.dateInfo.toDate().toLocaleTimeString(),
      };
    });
    setAllOrder(formattedOrders);
    setLoading(false);
  };

  // call the order function, when it first load
  useEffect(() => {
    getCurrentOrder();
    getAllOrder();
  }, [currentOrder]);

  // Delete Order function
  const deleteOrder = (id: string) => {
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
        const removeOrder = allOrder.filter((order) => order.id !== id);
        setAllOrder(removeOrder);
        orderDelete(id);

        // success message
        Swal.fire("Deleted!", `Your order deleted successfully!`, "success");
      }
    });
  };

  // if the page is loading, state then it show the message loading
  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingImg} alt="loading-img" />
      </div>
    );
  }

  // if cart list is empty, show empty cart icon with text
  if (allOrder.length === 0) {
    return (
      <>
        <SectionTop title="My Order" />
        <div className="empty-cart-container" data-aos="zoom-in">
          <div>
            <img src={emptyCart} alt="empty-cart" />
            <p> You don't have any existing order. </p>
            <Button
              variant="contained"
              size="medium"
              className="main-btn back-to-menu"
              endIcon={<RestaurantMenuOutlinedIcon />}
              onClick={() => navigate("/menu")}
            >
              Back to menu
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="myorder-section">
      <SectionTop title="My Order" />
      <Container>
        <Grid container spacing={3} className="order-container">
          {allOrder.map((order: MyOrderData) => (
            <Grid item lg={6} key={order.time}>
              <Box
                className="card-container neumorphic"
                data-aos="zoom-in"
                sx={{ height: "100%" }}
              >
                <div className="top-info">
                  <h4 className="signature"> Purchase Details</h4>
                  <p> Name: {order.user.displayName}</p>
                  <p> Email : {order.user.email}</p>
                  <p> Phone: {order.phone} </p>
                  <p>
                    Order placed on {order.date} at {order.time}
                  </p>
                </div>
                <TableContainer component={Paper} className="table-container">
                  <Table>
                    <TableBody>
                      {order.cart.map((item: CartItem) => {
                        return (
                          <React.Fragment key={item.title}>
                            <TableRow>
                              <TableCell
                                align="center"
                                className="cell-width img-cell"
                              >
                                <img src={item.img} alt="item-img" />
                              </TableCell>
                              <TableCell align="left" className="cell-width">
                                <p>{item.title}</p>
                              </TableCell>
                              <TableCell align="center" className="cell-width">
                                <p>${item.price * item.quantity}</p>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* Remove order */}
                <Button
                  variant="contained"
                  type="submit"
                  size="medium"
                  className="main-btn checkout-btn"
                  fullWidth
                  endIcon={<DeleteIcon />}
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete Order
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default MyOrder;
