import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { login } from "../redux/apiCalls";
import { device } from "../responsive";
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
  width: 344px;
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

  @media ${device.mobileM} {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: rgb(77, 1, 77);
  text-align: center;
  font-family: "Comfortaa", cursive;
  margin-bottom: 10px;
  /* text-transform: uppercase; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid gray;
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

const Error = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 600;
  font-family: "Comfortaa", cursive;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, loginError, loginErrors } = useSelector(
    (state) => state.user
  );

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
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
        <Title>Авторизація</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {loginError && <Error>{loginErrors}</Error>}
          <Button onClick={handleClick} disabled={isFetching}>
            Увійти
          </Button>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "'Comfortaa', cursive",
              fontSize: "14px",
            }}
          >
            Створити новий аккаунт
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
