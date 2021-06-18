import React from "react";
import styled from "styled-components";
import menu from "../../assets/menu.jpg";
import phonebg from "../../assets/phonebg.jpg";

import avocado from "../../assets/avocadoShake.png";
import bluebarryShake from "../../assets/bluebarryShake.png";
import orangeShake from "../../assets/orangeShake.png";
import choShakefrom from "../../assets/choShake.png";
import { Button } from "@material-ui/core";
import bananaSmt from "../../assets/bananaSmt.png";
import strwberrySmt from "../../assets/strwberrySmt.png";
import choSmt from "../../assets/choSmt.png";
import special from "../../assets/special.png";
import { productData } from "./data";
import { useDispatch } from "react-redux";
import { addToCart, selectAddToCart } from "../../features/userSlice";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Products() {
  const dispatch = useDispatch();
  console.log(productData);
  const cart = useSelector(selectAddToCart);
  console.log(cart);
  console.log(cart);

  return (
    <ProductsContainer>
      <ProductsGrid>
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            alt={item.alt}
            name={item.name}
            desc={item.desc}
            price={item.price}
            special={item.special ? item.special : false}
            chocolate={item.chocolate ? item.chocolate : false}
          />
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  padding: 2rem 0;
  background: url(${phonebg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
  @media screen and (max-width: 1050px) {
    height: 100%;
  }
`;

const ProductsGrid = styled.div`
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
