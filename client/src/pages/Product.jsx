import { Add, Remove } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { device } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  height: calc(100vh - 60px);
  min-height: 500px;

  @media ${device.laptop} {
    padding: 30px;
  }

  @media ${device.laptopS} {
    padding: 20px;
  }

  @media ${device.tablet} {
    min-height: 700px;
    height: auto;
  }

  @media ${device.mobileXL} {
    padding: 10px;
  }

  @media ${device.mobileL} {
    padding: 0px;
  }
`;

const ProductContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 14px -7px black;

  @media ${device.laptop} {
    padding: 10px;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    box-shadow: none;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media ${device.laptop} {
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  max-height: 550px;

  @media ${device.laptop} {
    max-height: 460px;
  }

  @media ${device.laptopS} {
    max-height: 340px;
  }

  @media ${device.tablet} {
    max-height: 300px;
  }

  @media ${device.mobileM} {
    max-height: 260px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop} {
  }
`;

const Title = styled.h1`
  font-weight: 300;
  font-family: "Comfortaa", cursive;

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.mobileXL} {
    font-size: 18px;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
  width: 70%;
  font-family: "Comfortaa", cursive;

  @media ${device.laptop} {
    width: 85%;
  }

  @media ${device.mobileXL} {
    font-size: 15px;
  }

  @media ${device.mobileM} {
    width: 100%;
  }
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 34px;
  font-family: "Comfortaa", cursive;

  @media ${device.mobileXL} {
    font-size: 30px;
  }
`;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 14px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  flex-direction: column;
  margin-right: 90px;

  @media ${device.mobileM} {
    margin-right: 40px;
  }

  @media ${device.mobileS} {
    margin-right: 30px;
  }
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-family: "Comfortaa", cursive;
`;

const CountText = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-family: "Comfortaa", cursive;
  margin-bottom: 6px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // UPDATE CART
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ProductContainer>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>{product.price}₴</Price>
            <AddContainer>
              <AmountContainer>
                <CountText>Кількість:</CountText>
                <CountContainer>
                  <Remove
                    onClick={() => handleQuantity("dec")}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F7F7F7",
                      color: "#999999",
                      borderRadius: "2px",
                    }}
                  />
                  <Amount>{quantity}</Amount>
                  <Add
                    onClick={() => handleQuantity("inc")}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F7F7F7",
                      color: "#999999",
                      borderRadius: "2px",
                    }}
                  />
                </CountContainer>
              </AmountContainer>
              {cart.products.findIndex((item) => item._id === id) > -1 ? (
                <Button
                  variant="outlined"
                  size="large"
                  style={{
                    borderColor: "#88ed88",
                    textTransform: "none",
                    minWidth: "124px",
                  }}
                >
                  <span style={{ fontFamily: "'Comfortaa', cursive" }} disabled>
                    В кошику
                  </span>
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleClick}
                  style={{
                    borderColor: "#ed889c",
                    textTransform: "none",
                    minWidth: "124px",
                  }}
                >
                  <span style={{ fontFamily: "'Comfortaa', cursive" }}>
                    В кошик
                  </span>
                </Button>
              )}
            </AddContainer>
            <Price style={{ fontSize: "22px" }}>
              Разом: {product.price * quantity}₴
            </Price>
          </InfoContainer>
        </ProductContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
