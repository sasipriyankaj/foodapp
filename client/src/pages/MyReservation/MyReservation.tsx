import Container from "@mui/material/Container";
import SectionTop from "../../components/SectionTop/SectionTop";
import { useDispatch, useSelector } from "react-redux";
import firebaseStorage from "../../firebase/firebaseStorage";
import type { RootState } from "../../redux/store/store";
import "./MyReservation.css";
import { useEffect, useState } from "react";
import loadingImg from "../../assets/images/loading.gif";
import emptyCart from "../../assets/images/emptycart.gif";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import Button from "@mui/material/Button";
import { ReservationData } from "../../firebase/firebaseStorage";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import "./MyReservation.css";

const MyReservation = () => {
  // important states
  const [reservationList, setReservationList] = useState<ReservationData[]>([]);
  const [loading, setLoading] = useState(false);

  // Get user from store
  const { user } = useSelector((state: RootState) => state.user);
  const { getReservation, deleteReservation } = firebaseStorage();
  const navigate = useNavigate();

  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get the reservations according to email
  const getMyReservations = async () => {
    setLoading(true);
    const myReservation: ReservationData[] = await getReservation(user.email);

    setReservationList(myReservation);
    setLoading(false);
  };

  // remove reservation
  const removeReservation = (id: string) => {
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
        const remainingReservation = reservationList.filter(
          (item) => item.id !== id
        );
        setReservationList(remainingReservation);
        deleteReservation(id);

        // success message
        Swal.fire(
          "Deleted!",
          `Your reservation deleted successfully!`,
          "success"
        );
      }
    });
  };

  // when this page load, show my reservations
  useEffect(() => {
    getMyReservations();
  }, []);

  // if the page is loading, state then it show the message loading
  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingImg} alt="loading-img" />
      </div>
    );
  }

  // if cart list is empty, show empty cart icon with text
  if (reservationList.length === 0) {
    return (
      <>
        <SectionTop title="My Reservation" />
        <div className="empty-cart-container" data-aos="zoom-in">
          <div>
            <img src={emptyCart} alt="empty-cart" />
            <p> You don't have any existing reservation. </p>
            <Button
              variant="contained"
              size="medium"
              className="main-btn back-to-menu"
              endIcon={<RestaurantMenuOutlinedIcon />}
              onClick={() => navigate("/reservation")}
            >
              Back to Reservation
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="my-reservation-section">
      <SectionTop title="My Reservation" />
      <Container>
        <TableContainer data-aos="zoom-in-down">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Mobile Number</TableCell>
                <TableCell align="center">Person</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservationList.length > 0 &&
                reservationList.map((item: ReservationData) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" className="cell-width">
                      <p>{item.date}</p>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <p>{item.time}</p>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <p>{item.phone}</p>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <p>{item.person}</p>
                    </TableCell>
                    <TableCell align="center" className="cell-width">
                      <Tooltip title="Delete">
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={() => item.id && removeReservation(item.id)}
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
      </Container>
    </section>
  );
};

export default MyReservation;
