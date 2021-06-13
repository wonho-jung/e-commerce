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
  console.log(typeof shoppingCart);
  return (
    <CartContainer>
      {shoppingCart.map((item, index) => (
        <CartProducts
          index={index}
          key={index}
          img={item.img}
          alt={item.alt}
          name={item.name}
          desc={item.desc}
          price={item.price}
          special={item.special}
          chocolate={item.chocolate}
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
