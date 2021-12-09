import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../responsive";
import { Button } from "@material-ui/core";

const Container = styled.div`
  margin: 20px;
  height: 220px;
  width: 360px;
  position: relative;
  background-color: #${(props) => props.bg};
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 0px 18px -8px black;

  @media ${device.laptop} {
    margin: 8px;
  }

  @media ${device.mobileL} {
    height: 180px;
    width: 320px;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 86%;
  object-fit: cover;
  z-index: 1;

  @media ${device.mobileM} {
    height: 78%;
  }

  @media ${device.mobileS} {
    height: 74%;
  }
`;

const Info = styled.div`
  width: 200px;
  margin: 50px 25px;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${device.mobileL} {
    margin: 30px 16px;
    width: 180px;
  }
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 10px;
  font-size: 24px;
  font-family: "Comfortaa", cursive;
`;

const Desc = styled.p`
  color: black;
  margin-bottom: 12px;
  font-size: 18px;
  font-family: "Comfortaa", cursive;

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container bg={item.bg}>
      <Link
        to={`/products/${item.cat}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button
            variant="outlined"
            style={{
              width: "110px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "600",
              padding: "4px 20px",
            }}
          >
            Показати
          </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
