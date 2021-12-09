import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Success = () => {
  const location = useLocation();
  const data = location.state?.userData;
  const cart = location.state?.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          userName: data.userName,
          products: cart.products.map((item) => ({
            productId: item._id,
            productName: item.title,
            productPrice: item.price,
            quantity: item.quantity,
            productPriceAll: item.quantity * item.price,
          })),
          city: data.userCity,
          delivery: data.delivery,
          deliverySum: data.deliverySum,
          tel: data.userTel,
          total: cart.total + data.deliverySum,
        });
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {orderId
            ? `Замовлення створено успішно. Номер - ${orderId}`
            : `Успішно. Ваше замовлення готується...`}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Button
              variant="outlined"
              size="large"
              style={{
                textTransform: "none",
                backgroundColor: "#58d86e",
                borderColor: "#58d86e",
                color: "white",
                width: "200px",
                margin: "0 auto",
                marginTop: "30px",
              }}
            >
              На головну
            </Button>
          </Link>
        </div>
      ) : (
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Button
            variant="outlined"
            size="large"
            style={{
              textTransform: "none",
              backgroundColor: "#d87658",
              borderColor: "#d87658",
              color: "white",
              width: "200px",
              margin: "0 auto",
              marginTop: "30px",
            }}
          >
            На головну
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Success;
