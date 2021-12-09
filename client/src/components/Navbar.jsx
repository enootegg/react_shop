import { Badge } from "@material-ui/core";
import {
  Person,
  PersonAdd,
  ShoppingCartOutlined,
  ExitToAppRounded,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { device } from "../responsive";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
  color: #222222;
  height: 60px;

  @media ${device.mobileXL} {
    height: 36px;
  }
`;

const Wrapper = styled.div`
  padding: 9px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 9px 6px;
  }

  @media ${device.mobileXL} {
    padding: 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    .leftBtn {
      font-size: 12px;
    }
  }

  @media ${device.tablet} {
    .leftBtn {
      font-size: 10px;
      min-width: 50px;
      padding: 4px 8px;
    }
  }
  @media ${device.mobileXL} {
    .leftBtn {
      font-size: 9px;
      min-width: 34px;
      padding: 2px 4px;
    }
  }
  @media ${device.mobileS} {
    .leftBtn {
      font-size: 9px;
      min-width: 30px;
      padding: 1px 2px;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-family: "Comfortaa", cursive;

  @media ${device.laptop} {
    font-size: 22px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobileXL} {
    font-size: 14px;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.laptop} {
    .rightBtn {
      height: 30px;
      font-size: 11px;
    }
    .MuiButton-iconSizeMedium > * {
      font-size: 16px !important;
    }
  }

  @media ${device.tablet} {
    .rightBtn {
      height: 28px;
      font-size: 10px;
      padding: 1px 8px;
      margin-right: 10px !important;
    }
    .MuiButton-iconSizeMedium > * {
      font-size: 14px !important;
    }
  }

  @media ${device.mobileXL} {
    .rightBtn {
      height: 22px;
      font-size: 9px;
      padding: 1px 6px;
      margin-right: 10px !important;
    }
    .MuiButton-iconSizeMedium > * {
      font-size: 12px !important;
    }
    .MuiButton-endIcon {
      margin-left: 2px;
    }
  }

  @media ${device.mobileS} {
    .rightBtn {
      height: 18px;
      font-size: 8px;
      padding: 1px 4px;
      margin-right: 8px !important;
    }
    .MuiButton-iconSizeMedium > * {
      font-size: 10px !important;
    }
    .MuiButton-endIcon {
      margin-left: 1px;
    }
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 16px;
  border: 1px solid ${(props) => props.border || " #22222285"};
  background-color: "inherit";
  color: "#222222";
  border-radius: 8px;
  padding: 8px 18px;
  transition: all 0.5s ease;

  @media ${device.tablet} {
    margin-left: 0;
    padding: 8px 8px;
  }

  @media ${device.mobileXL} {
    padding: 8px 8px 8px 0;
    .MuiSvgIcon-root {
      font-size: 20px !important;
      padding: 1px 0;
    }
    .MuiBadge-badge {
      height: 14px;
      min-width: 14px;
      font-size: 10px;
    }
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => state.cart.quantity);

  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout({ user }));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              style={{ textTransform: "none", fontWeight: "bold" }}
              className="leftBtn"
            >
              Головна
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              style={{ textTransform: "none", fontWeight: "bold" }}
              className="leftBtn"
            >
              Товари
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              style={{ textTransform: "none", fontWeight: "bold" }}
              className="leftBtn"
            >
              Контакти
            </Button>
          </Link>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>YummyBebra</Logo>
          </Link>
        </Center>
        <Right>
          {!user ? (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  variant="outlined"
                  endIcon={<PersonAdd />}
                  style={{
                    backgroundColor: "white",
                    color: "#222222",
                    marginRight: "16px",
                    textTransform: "none",
                  }}
                  className="rightBtn"
                >
                  Реєстрація
                </Button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  variant="outlined"
                  endIcon={<Person />}
                  style={{
                    backgroundColor: "#FF6666",
                    borderColor: "#FF6666",
                    color: "white",
                    textTransform: "none",
                  }}
                  className="rightBtn"
                >
                  Увійти
                </Button>
              </Link>
            </>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Button
                variant="outlined"
                endIcon={<ExitToAppRounded />}
                style={{
                  backgroundColor: "#523be9",
                  borderColor: "#523be9",
                  color: "white",
                  textTransform: "none",
                }}
                onClick={handleLogout}
                className="rightBtn"
              >
                Вийти
              </Button>
            </Link>
          )}
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem border="none">
              <Badge badgeContent={quantity}>
                <ShoppingCartOutlined style={{ fontSize: "26px" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
