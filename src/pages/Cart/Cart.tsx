import "./Cart.css";
import Container from "@mui/material/Container";
import SectionTop from "../../components/SectionTop/SectionTop";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Cart = () => {
  // get cart from store
  const cart = useSelector((state: RootState) => state.menu.cart);
  console.log(cart);

  return (
    <section className="cart-section">
      <SectionTop title="Cart" />
      <Container>
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  );
};

export default Cart;
