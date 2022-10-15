import Header from "../components/Common/Header/Header";
import usePrivateRoute from "../Hooks/usePrivateRoute";

const Cart = () => {
  usePrivateRoute();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Cart;
