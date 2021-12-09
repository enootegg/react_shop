import styled from "styled-components";
import { categories } from "../data";
import { device } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.laptop} {
    padding: 0px;
    padding-top: 12px;
  }

  @media ${device.mobileM} {
    padding: 6px;
    padding-top: 14px;
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
