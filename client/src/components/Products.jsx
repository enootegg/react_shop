import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Fuse from "fuse.js";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort, query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [countPerPage] = useState(8);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.updatedAt - b.updatedAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const lastIndex = page * countPerPage;
  const firstIndex = lastIndex - countPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  const fuse = new Fuse(filteredProducts, {
    keys: ["title", "desc", "price", "brand", "categories"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const productsResults = query
    ? results.map((result) => result.item)
    : currentProducts;

  return (
    <>
      <Container>
        {cat
          ? productsResults.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </Container>
      {cat && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={
              results.length < 1
                ? Math.ceil(filteredProducts.length / countPerPage)
                : 1
            }
            page={page}
            onChange={handleChange}
            size="large"
          />
        </div>
      )}
    </>
  );
};

export default Products;
