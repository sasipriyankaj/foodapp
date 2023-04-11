import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/menuSlice";
import firebaseStorage from "../../firebase/firebaseStorage";

const MyOrder = () => {
  // important states and variables
  const [orderlist, setOrderList] = useState({});
  const dispatch = useDispatch();
  const { setOrder } = firebaseStorage();

  const getOrder = () => {
    fetch("http://localhost:4000/myorder")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.cart) {
          setOrderList(data);

          // set the order to firebase
          setOrder(data);
          //   clear the cart
          dispatch(clearCart());
        }
      })
      .catch((error) => console.error(error));
  };

  // call the order function, when it first load
  useEffect(() => {
    getOrder();
  }, []);

  return <div>MyOrder</div>;
};

export default MyOrder;
