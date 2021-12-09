import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 6px;
  min-width: 280px;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdf5f9;
  position: relative;
  flex-direction: column;
  box-shadow: 0px 0px 16px -8px black;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 220px;
  width: 220px;
  margin: 28px 40px 10px 40px;
  z-index: 2;
`;

const Btn = styled.div`
  width: 100%;
  height: 50px;
  background-color: #c359c7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  font-size: 14px;
  font-weight: 500;
  font-family: "Comfortaa", cursive;

  &:hover {
    background-color: #c359c7dc;
  }
`;

const Title = styled.h2`
  height: 50px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-family: "Comfortaa", cursive;
`;

const Price = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 4px;
  font-family: "Comfortaa", cursive;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Title>{item.title}</Title>
      <Price>{item.price}₴</Price>
      <Link
        to={`/product/${item._id}`}
        style={{ textDecoration: "none", color: "black", width: "100%" }}
      >
        <Btn>Переглянути</Btn>
      </Link>
    </Container>
  );
};

export default Product;
