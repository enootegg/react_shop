import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { device } from "../responsive";
import { useEffect, useState, useRef } from "react";
import { deleteProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Delete, Close } from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";
import emailjs from "emailjs-com";
import { useHistory } from "react-router";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  @media ${device.tablet} {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-family: "Comfortaa", cursive;

  &.modalTitle {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  @media ${device.tablet} {
    font-size: 26px;
  }

  @media ${device.mobileXL} {
    font-size: 22px;
  }

  @media ${device.mobileL} {
    font-size: 18px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;

  @media ${device.tablet} {
    padding: 10px;
  }

  @media ${device.mobileL} {
    padding: 8px;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media ${device.mobileXL} {
    flex-direction: column;
    position: relative;
  }
`;

const ProductDetail = styled.div`
  flex: 3;
  display: flex;

  @media ${device.tablet} {
    flex: 5;
  }
`;

const Image = styled.img`
  width: 190px;
  border-radius: 6px;

  @media ${device.tablet} {
    width: 130px;
  }

  @media ${device.mobileXL} {
    width: 130px;
  }

  @media ${device.mobileL} {
    width: 110px;
  }

  @media ${device.mobileM} {
    width: 90px;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  .delBtn {
    transition: all 0.5s !important;
  }

  .delBtn .MuiSvgIcon-root {
    transition: all 0.5s !important;
  }

  .MuiIconButton-root:hover .MuiSvgIcon-root {
    color: #ff6666 !important;
  }

  @media ${device.tablet} {
    padding: 10px;
  }

  @media ${device.mobileXL} {
    padding: 5px;
  }

  @media ${device.mobileL} {
    .delBtn .MuiSvgIcon-root {
      font-size: 18px !important;
      color: #d80f0f !important;
    }

    .delBtn .MuiIconButton-root {
      padding: 6px !important;
    }
  }
`;

const ProductName = styled.span`
  font-size: 18px;
  font-family: "Comfortaa", cursive;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }

  @media ${device.mobileM} {
    font-size: 13px;
  }
`;

const ProductDesc = styled.span`
  font-size: 15px;
  font-family: "Comfortaa", cursive;

  @media ${device.tablet} {
    font-size: 13px;
  }

  @media ${device.mobileL} {
    font-size: 11px;
  }

  @media ${device.mobileM} {
    font-size: 10px;
  }
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: flex-start;
    margin-top: 14px;
  }

  @media ${device.mobileXL} {
    margin-top: 0px;
    flex-direction: row;
    position: absolute;
    right: 10px;
    bottom: 10px;
    height: 30px;
  }

  @media ${device.mobileL} {
    right: 6px;
    bottom: 6px;
  }

  @media ${device.mobileM} {
    right: 6px;
    bottom: 0px;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media ${device.tablet} {
    margin-bottom: 6px;
  }

  @media ${device.mobileXL} {
    margin-right: 20px;
  }

  @media ${device.mobileL} {
    margin-right: 10px;
  }

  @media ${device.mobileL} {
    margin-right: 6px;
  }
`;

const ProductAmount = styled.div`
  font-size: 18px;
  margin: 5px;
  font-family: "Comfortaa", cursive;
  min-width: 115px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 15px;
  }

  @media ${device.mobileL} {
    font-size: 13px;
  }

  @media ${device.mobileM} {
    text-align: end;
    font-size: 11px;
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  font-family: "Comfortaa", cursive;

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.mobileXL} {
    margin-top: -3px;
  }

  @media ${device.mobileL} {
    margin-top: -5px;
    font-size: 20px;
  }

  @media ${device.mobileL} {
    margin-top: -5px;
    font-size: 16px;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const SummaryLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SummaryItem = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

const SummaryItemText = styled.span`
  margin-right: 6px;
  font-size: 18px;
  font-family: "Comfortaa", cursive;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "22px"};
  max-width: 400px;

  @media ${device.tablet} {
    font-size: 16px;
    font-size: ${(props) => props.type === "total" && "18px"};
    max-width: 250px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    font-size: ${(props) => props.type === "total" && "16px"};
    max-width: 200px;
  }

  @media ${device.mobileM} {
    max-width: 150px;
  }
`;

const SummaryItemPrice = styled.span`
  font-size: 18px;
  font-family: "Comfortaa", cursive;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "22px"};

  @media ${device.tablet} {
    font-size: 16px;
    font-size: ${(props) => props.type === "total" && "18px"};
  }

  @media ${device.mobileL} {
    font-size: 14px;
    font-size: ${(props) => props.type === "total" && "16px"};
  }
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${device.mobileL} {
    .cartBtn {
      font-size: 12px;
    }
  }
`;

const Empty = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  font-family: "Comfortaa", cursive;

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  .closeBtn {
    position: absolute;
    right: -8px;
    top: -8px;
    color: #222222;
    cursor: pointer;

    &:hover {
      animation: ${rotate} 1s ease-in-out both;
    }
  }
`;

const Input = styled.input`
  min-width: 40%;
  font-family: "Comfortaa", cursive;
  padding: 0 14px;
  width: 280px;
  height: 45px;
  background-color: #efefef;
  border-radius: 4px;
  border: none;

  @media ${device.mobileL} {
    width: 84%;
  }

  @media ${device.mobileM} {
    width: 90%;
  }
`;

const Label = styled.label`
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: "Comfortaa", cursive;
`;

const TextArea = styled.textarea`
  min-width: 40%;
  font-family: "Comfortaa", cursive;
  width: 280px;
  background-color: #efefef;
  border-radius: 4px;
  border: none;
  height: 90px;
  resize: none;
  padding: 10px;
  font-size: 13px;

  @media ${device.mobileL} {
    width: 84%;
  }

  @media ${device.mobileM} {
    width: 90%;
  }
`;

const Cart = () => {
  const formRef = useRef();

  const cart = useSelector((state) => state.cart);
  const [delivery, setDelivery] = useState(55);
  const [ModalActive, setModalActive] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDel = (id, price, quantity) => {
    // DELETE PRODUCT FROM CART
    dispatch(deleteProduct({ ...cart, id, price, quantity }));
  };

  useEffect(() => {
    cart.total > 300 ? setDelivery(0) : setDelivery(55);
  }, [cart.total]);

  const sendEmail = (e) => {
    e.preventDefault();

    let obj = {};

    let formData = new FormData(formRef.current);

    formData.forEach((value, key) => (obj[key] = value));

    let arr = [];

    cart.products.forEach((el) => {
      arr.push(`<tr>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>
                Код товару: ${el._id}</td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>
                Товар: ${el.title}</td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>
                Ціна: ${el.price} грн</td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>
                Кількість: ${el.quantity} шт</td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>
                Разом: ${el.price * el.quantity} грн</td>
            </tr>`);
    });

    const templateParams = {
      quantity: cart.quantity,
      total: cart.total + delivery,
      userCart: arr.join("\n"),
      userName: obj.name,
      userCity: obj.city,
      userTel: obj.tel,
      delivery: obj.delivery,
      deliverySum: delivery,
    };

    emailjs
      .send(
        "service_3dlgylr",
        "template_e68tw2j",
        templateParams,
        "user_tjqEgmul7wOdDHUzrTJu2"
      )
      .then(
        (result) => {
          // console.log(result);
          setSuccess(true);
          history.push("/success", {
            userData: templateParams,
            products: cart,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Кошик</Title>
        {cart.products.length > 0 ? (
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <Link
                      to={/product/ + product._id}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>{product.title}</ProductName>
                      <ProductDesc>{product.desc}</ProductDesc>
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          handleDel(
                            product._id,
                            product.price,
                            product.quantity
                          )
                        }
                        className="delBtn"
                      >
                        <Delete
                          style={{ color: "#888888", cursor: "pointer" }}
                        />
                      </IconButton>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount>
                        Кількість: {product.quantity}
                      </ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>
                      {product.price * product.quantity} ₴
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryLeft>
                <SummaryItem>
                  <SummaryItemText>Товарів на:</SummaryItemText>
                  <SummaryItemPrice>{cart.total} ₴</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Доставка:</SummaryItemText>
                  <SummaryItemPrice>{delivery} ₴</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>
                    Для товарів на суму 300 гривень і більше доставка
                    безкоштовна
                  </SummaryItemText>
                </SummaryItem>
              </SummaryLeft>
              <SummaryRight>
                <SummaryItem>
                  <SummaryItemText type="total">Разом:</SummaryItemText>
                  <SummaryItemPrice type="total">
                    {cart.total + delivery} ₴
                  </SummaryItemPrice>
                </SummaryItem>
              </SummaryRight>
            </Summary>
            <ButtonsBlock>
              <Button
                variant="outlined"
                size="large"
                style={{ textTransform: "none", marginRight: "6px" }}
                className="cartBtn"
              >
                Повернутись до покупок
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{
                  textTransform: "none",
                  backgroundColor: "#FF6666",
                  borderColor: "#FF6666",
                  color: "white",
                }}
                className="cartBtn"
                onClick={() => setModalActive(true)}
              >
                Перейти до оформлення
              </Button>
              <Modal
                active={ModalActive}
                setActive={setModalActive}
                success={success}
                setSuccess={setSuccess}
              >
                <Form ref={formRef} onSubmit={sendEmail}>
                  <Close
                    className="closeBtn"
                    onClick={() => {
                      setModalActive(false);
                      setSuccess(false);
                    }}
                  />
                  <Title className="modalTitle">Оформлення замовлення</Title>
                  <Label>
                    <InputText>ПІБ:</InputText>
                    <Input placeholder="" name="name" />
                  </Label>
                  <Label>
                    <InputText>Телефон:</InputText>
                    <Input placeholder="+380 (__)___-____" name="tel" />
                  </Label>
                  <Label>
                    <InputText>Місто:</InputText>
                    <Input placeholder="Івано-Франківськ" name="city" />
                  </Label>
                  <Label>
                    <InputText>Дані доставки:</InputText>
                    <TextArea
                      placeholder="Відділення чи індекс пошти, коментар якщо потрібно"
                      name="delivery"
                    />
                  </Label>
                  <Button
                    variant="outlined"
                    size="large"
                    style={{
                      textTransform: "none",
                      backgroundColor: "#FF6666",
                      borderColor: "#FF6666",
                      color: "white",
                      width: "90%",
                      margin: "0 auto",
                    }}
                    type="submit"
                  >
                    Замовити
                  </Button>
                </Form>
              </Modal>
            </ButtonsBlock>
          </Bottom>
        ) : (
          <Bottom>
            <Empty>
              Тут пусто {":("}
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Button
                  variant="outlined"
                  size="large"
                  style={{ textTransform: "none", marginTop: "20px" }}
                >
                  Повернутись до покупок
                </Button>
              </Link>
            </Empty>
          </Bottom>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
