import styled, { keyframes } from "styled-components";
import { device } from "../responsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@material-ui/icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  width: 584px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -8px black;
  position: relative;

  .closeBtn {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #222222;
    cursor: pointer;

    &:hover {
      animation: ${rotate} 1s ease-in-out both;
    }
  }

  @media ${device.mobileXL} {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: rgb(77, 1, 77);
  text-align: center;
  font-family: "Comfortaa", cursive;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobileXL} {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0 0;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: "Comfortaa", cursive;
`;

const Agreement = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0px;
  font-family: "Comfortaa", cursive;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: "Comfortaa", cursive;
  font-weight: 500;
  transition: all 0.5s ease;
  &::disabled {
    color: green;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #663399ea;
  }
`;

const Errors = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 600;
  font-family: "Comfortaa", cursive;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, registerError, registerErrors } = useSelector(
    (state) => state.user
  );

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Close className="closeBtn" />
        </Link>
        <Title>Реєстрація</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password" />
          <Errors>
            {registerError && <Error>{registerErrors.message}:</Error>}
            {registerError &&
              registerErrors.errors.map((el) => <Error>{el.msg}</Error>)}
          </Errors>
          <Agreement>
            Створюючи обліковий запис, Ви даєте згоду на обробку Ваших
            персональних даних
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            Створити
          </Button>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "'Comfortaa', cursive",
              fontSize: "14px",
            }}
          >
            Уже є аккаунт? Увійти
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
