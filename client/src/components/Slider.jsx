import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import { init } from "ityped";
import styled from "styled-components";
import { sliderItems } from "../data";
import { device } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  @media ${device.mobileXL} {
    left: ${(props) => props.direction === "left" && "1px"};
    right: ${(props) => props.direction === "right" && "1px"};
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;

const SlideContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    margin-top: 100px;
    flex-direction: column;
  }

  @media ${device.mobileXL} {
    margin-top: 40px;
  }

  @media ${device.mobileL} {
    margin-top: 30px;
  }

  @media ${device.mobileS} {
    margin-top: 16px;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 90%;
  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.mobileXL} {
    width: 70%;
  }

  @media ${device.mobileL} {
    width: 80%;
  }

  @media ${device.mobileS} {
    width: 90%;
  }
`;

const InfoContainer = styled.div`
  flex: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  text-align: center;

  @media ${device.laptop} {
    font-size: 42px;
  }

  @media ${device.tablet} {
    font-size: 34px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }

  @media ${device.mobileS} {
    font-size: 24px;
  }
`;

const Desc = styled.p`
  width: 90%;
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
  font-family: "Comfortaa", cursive;
  text-align: center;

  @media ${device.laptop} {
    font-size: 24px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    margin: 40px 0px;
  }

  @media ${device.mobileS} {
    font-size: 18px;
  }
`;

const Typed = styled.span`
  color: #a81b37;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 40,
      strings: [
        "Тільки якісну косметику від виробника",
        "Безліч засобів для догляду за обличчям та тілом",
        "Хороший подарунок для кожного",
      ],
    });
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="FCF1ED" key="007">
          <SlideContainer>
            <ImgContainer>
              <Image src="https://firebasestorage.googleapis.com/v0/b/reactshop-5ffd4.appspot.com/o/cosmetic1%20new.png?alt=media&token=8303a69d-b472-4678-9f84-259e149c6f9b" />
            </ImgContainer>
            <InfoContainer>
              <Title>Вітаємо у нашому магазинчику {"<3"}</Title>
              <Desc>
                У нас ви знайдете <br /> <Typed ref={textRef}></Typed> <br /> І
                не тільки!
              </Desc>
              <Link
                to="/products/all"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="outlined" size="large">
                  Показати
                </Button>
              </Link>
            </InfoContainer>
          </SlideContainer>
        </Slide>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <SlideContainer>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button variant="outlined" size="large">
                  Показати
                </Button>
              </InfoContainer>
            </SlideContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
