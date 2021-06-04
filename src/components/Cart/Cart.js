import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectAddToCart } from "../../features/userSlice";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
function Cart() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(selectAddToCart);
  console.log(shoppingCart);
  return (
    <CartContainer>
      {shoppingCart.map((item, index) => (
        <CartProducts
          index={index}
          key={index}
          img={item.basket.img}
          alt={item.basket.alt}
          name={item.basket.name}
          desc={item.basket.desc}
          price={item.basket.price}
          special={item.basket.special}
          chocolate={item.basket.chocolate}
        />
      ))}
      <CartTotal />
    </CartContainer>
  );
}

export default Cart;
const CartContainer = styled.div`
  background-color: #fbdbdc;
  padding: 2rem 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    padding: 1rem 5%;
  }
`;
