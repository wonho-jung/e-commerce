import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { addToCart, selectAddToCart } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ProductCard({ key, img, alt, name, desc, price, special, chocolate }) {
  const dispatch = useDispatch();
  const addcart = useSelector(selectAddToCart);
  console.log(addcart);
  const handleAdd = () => {
    dispatch(
      addToCart({
        img: img,
        alt: alt,
        name: name,
        desc: desc,
        price: price,
        special: special,
        chocolate: chocolate,
      })
    );
  };
  return (
    <ProductCardContainer key={key}>
      <img
        className={chocolate || (special && chocolate) ? chocolate : special}
        src={img}
        alt={alt}
      />
      <Content>
        <h3>{name}</h3>
        <p>{desc}</p>
        <h5>${price}</h5>
        <Button onClick={handleAdd}>ADD TO CART</Button>
      </Content>
    </ProductCardContainer>
  );
}

export default ProductCard;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 250px;
    @media screen and (max-width: 1200px) {
      max-width: 200px;
    }
  }
  .chocolate {
    max-width: 180px;
    padding-bottom: 20px;
    @media screen and (max-width: 1200px) {
      max-width: 160px;
      padding-bottom: 5px;
    }
  }
  .special {
    max-width: 180px;
    @media screen and (max-width: 1200px) {
      max-width: 145px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: clamp(1rem, 1.5vw, 3rem);
    color: #fa4e5c;
    font-weight: 500;
    text-shadow: 0.3px 0.4px #fff;
  }
  h5 {
    font-size: clamp(1rem, 2vw, 3rem);
  }
  p {
    font-size: clamp(1rem, 0.5vw, 3rem);
  }
  button {
    margin-top: 1rem;
    color: #fff;
    border-radius: 20px;
    padding: 10px;
    background: #fa4e5c;
    :hover {
      color: #fa4e5c;
      border: 1px solid #fa4e5c;
    }
  }
`;
