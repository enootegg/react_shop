import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import { device } from "../responsive";

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-family: "Comfortaa", cursive;
  text-align: center;

  @media ${device.laptop} {
    margin-top: 16px;
  }

  @media ${device.laptopS} {
    font-size: 24px;
  }

  @media ${device.mobileXL} {
    font-size: 20px;
  }
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Title>Популярні товари</Title>
      <Products query="0" />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
