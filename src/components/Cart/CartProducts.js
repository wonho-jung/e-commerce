import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeFromCart, selectRemoveFromCart } from "../../features/userSlice";

function CartProducts({ index, key, img, alt, name, desc, price, disable }) {
  const test = useSelector(selectRemoveFromCart);
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(removeFromCart({ idx: index }));
  };

  return (
    <CartProductsContainer key={key}>
      <img src={img} alt={alt} />

      <Content>
        <h3>{name}</h3>
        <p>{desc}</p>
        <h5>${price}</h5>
        {!disable && (
          <Button onClick={removeFromBasket}>Remove from Cart</Button>
        )}
      </Content>
    </CartProductsContainer>
  );
}

export default CartProducts;

const CartProductsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
  img {
    object-fit: contain;
    width: 180px;
    height: 180px;
    @media screen and (max-width: 500px) {
      width: 100px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: clamp(1rem, 1.2vw, 3rem);
    color: #fa4e5c;
    font-weight: 500;
    text-shadow: 0.3px 0.4px #fff;
    padding-bottom: 0.2rem;
  }
  h5 {
    font-size: clamp(0.9rem, 0.5vw, 2.4rem);
  }
  p {
    font-size: clamp(0.8rem, 0.1vw, 2rem);
    padding-bottom: 0.1rem;
  }
  button {
    margin-top: 1rem;
    color: #fff;
    border-radius: 20px;
    padding: 3 2px;
    background: #fa4e5c;
    font-size: 9px;
    :hover {
      color: #fa4e5c;
      border: 1px solid #fa4e5c;
    }
  }
`;
