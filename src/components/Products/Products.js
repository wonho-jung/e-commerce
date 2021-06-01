import React from "react";
import styled from "styled-components";
import banana from "../../assets/menu.jpg";
function Products() {
  return <ProductsContainer></ProductsContainer>;
}

export default Products;

const ProductsContainer = styled.div`
  background: url(${banana});
  height: 100vh;
  background-size: cover;
  opacity: 0.8;
  h1 {
    opacity: 1;
  }
`;
