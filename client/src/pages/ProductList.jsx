import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { device } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 30px;
  font-family: "Comfortaa", cursive;

  @media ${device.laptopS} {
    font-size: 26px;
  }

  @media ${device.mobileXL} {
    margin: 10px;
    font-size: 22px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Filter = styled.div`
  margin: 20px;

  @media ${device.laptopS} {
    margin: 10px;
  }

  @media ${device.tablet} {
    margin: 0 16px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  font-family: "Comfortaa", cursive;

  @media ${device.laptopS} {
    margin-right: 6px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;

    margin-left: ${(props) => props.margin};
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  margin-right: 20px;
  font-family: "Comfortaa", cursive;

  @media ${device.laptopS} {
    margin: 10px 4px;
    font-size: 14px;
  }

  @media ${device.tablet} {
    margin-bottom: ${(props) => props.margin};
  }

  @media ${device.mobileM} {
    font-size: 13px;
  }
`;

const SearchBlock = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: center;

  @media ${device.laptopS} {
    margin: 10px;
  }

  @media ${device.tablet} {
    margin: 0 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
`;

const Search = styled.input`
  width: 280px;
  height: 35px;
  font-size: 16px;
  padding: 5px;
  font-family: "Comfortaa", cursive;

  @media ${device.tablet} {
    margin-top: 8px;
  }
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [query, setQuery] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleQuery = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };

  return (
    <Container>
      <Navbar />
      <Title>??????????????????: {cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText margin="5px">??????????????:</FilterText>
          <Select name="filter" onChange={handleFilters} margin="2px">
            <Option disabled>????????????</Option>
            <Option>??????????</Option>
            <Option>??????????</Option>
            <Option>??????????????????</Option>
            <Option>??????????</Option>
            <Option>??????????????????????</Option>
            <Option>????????</Option>
            <Option>????????????</Option>
            <Option>????????</Option>
            <Option>??????????????</Option>
            <Option>????????????????</Option>
            <Option>????????????????????????</Option>
            <Option>?????????? ?????? ??????????????</Option>
            <Option>??????????????/????????????</Option>
            <Option>??????????????????</Option>
          </Select>
          <Select name="brand" onChange={handleFilters}>
            <Option disabled>??????????</Option>
            <Option>Aqua</Option>
            <Option>Angelic</Option>
            <Option>Armani</Option>
            <Option>BioVital</Option>
            <Option>Braun</Option>
            <Option>Collistar</Option>
            <Option>Dermacol</Option>
            <Option>Fa</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText margin="5px">??????????????????:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            {/* <Option value="newest">???????????? ??????????????</Option> */}
            <Option value="asc">?????? ?????????????? ???? ??????????????</Option>
            <Option value="desc">?????? ?????????????? ???? ??????????????</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <SearchBlock>
        <FilterText>??????????:</FilterText>
        <Search onChange={handleQuery} />
      </SearchBlock>
      <Products cat={cat} filters={filters} sort={sort} query={query} />
      <Footer />
    </Container>
  );
};

export default ProductList;
