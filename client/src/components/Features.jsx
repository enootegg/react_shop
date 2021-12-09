import styled from "styled-components";
import { device } from "../responsive";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopS} {
    justify-content: space-around;
  }
`;

const UpperTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-family: "Comfortaa", cursive;
  margin-bottom: 30px;
  margin-top: 20px;

  @media ${device.laptopS} {
    font-size: 30px;
    margin-bottom: 10px;
  }

  @media ${device.mobileXL} {
    font-size: 20px;
  }

  @media ${device.mobileS} {
    width: 94%;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptopS} {
    flex-direction: column;
    height: 100%;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 340px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -8px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transition: all 1s ease;

  @media ${device.laptopS} {
    width: 300px;
    height: 220px;
    margin: 18px 0;
  }

  @media ${device.mobileXL} {
    width: 280px;
    height: 180px;
    margin: 10px 0;
  }

  &.featured {
    width: 280px;
    height: 370px;
    margin: 0 30px;

    @media ${device.laptopS} {
      width: 300px;
      height: 220px;
      margin: 1px;
    }

    @media ${device.mobileXL} {
      width: 280px;
      height: 180px;
      margin: 1px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 110px;
  width: 110px;
  object-fit: cover;
  margin: 0 30px;

  @media ${device.laptopS} {
    width: 80px;
    height: 80px;
  }

  @media ${device.mobileXL} {
    width: 70px;
    height: 70px;
  }
`;

const Title = styled.h3`
  padding: 10px;
  font-size: 24px;
  font-weight: 400;
  font-family: "Comfortaa", cursive;
  text-align: center;

  @media ${device.laptopS} {
    font-size: 16px;
    padding: 5px;
  }

  @media ${device.mobileXL} {
    font-size: 15px;
    padding: 5px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Comfortaa", cursive;
  text-align: center;

  @media ${device.laptopS} {
    font-size: 15px;
  }

  @media ${device.mobileXL} {
    font-size: 14px;
  }
`;

const Features = () => {
  const data = [
    {
      id: 1,
      title: "Якісна косметика",
      img: "https://firebasestorage.googleapis.com/v0/b/reactshop-5ffd4.appspot.com/o/feature1.png?alt=media&token=c9b996a5-80b2-4cd7-8ae4-bec0c0b2cb7b",
      desc: "У нас ви завжди знайдете косметику тільки високої якості і за доступними цінами",
    },
    {
      id: 2,
      title: "Безкоштовна консультація",
      img: "https://firebasestorage.googleapis.com/v0/b/reactshop-5ffd4.appspot.com/o/feature2.png?alt=media&token=77fc0e71-1bb1-43aa-bddb-1676b0263ba2",
      desc: "Наші консультанти завжди вам допоможуть з вибором косметики",
      featured: true,
    },
    {
      id: 3,
      title: "Швидка доставка",
      img: "https://firebasestorage.googleapis.com/v0/b/reactshop-5ffd4.appspot.com/o/feature3.png?alt=media&token=4847ad9f-b828-4533-af42-b05ef84f2d50",
      desc: "Доставка триває всього 1-2 дні з моменту замовлення",
    },
  ];

  return (
    <Container>
      <UpperTitle>Особливості нашого сервісу</UpperTitle>
      <Wrapper>
        {data.map((d) => (
          <Card className={d.featured ? "featured" : ""} key={d.id}>
            <Top>
              <Image src={d.img} alt="" />
            </Top>
            <Title>{d.title}</Title>
            <Desc>{d.desc}</Desc>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Features;
