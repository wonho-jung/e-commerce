import React from "react";
import styled from "styled-components";
import apple from "../assets/apple.jpg";
import bananana from "../assets/bananana.jpg";
import lemon from "../assets/lemon.jpg";
import papple from "../assets/papple.jpg";
import avocado from "../assets/avocado.jpg";
import peach from "../assets/peach.jpg";

function Fruit() {
  return (
    <FruitContainer>
      <FruitBoxOne>
        <img className="test" src={apple} alt="" />
        <img className="test3" src={peach} alt="" />
        <img className="test3" src={bananana} alt="" />
        <img className="test3" src={avocado} alt="" />
      </FruitBoxOne>
      <FruitBoxTwo>
        <img className="test" src={lemon} alt="" />
        <img className="test3" src={papple} alt="" />
        <img className="test3" src={avocado} alt="" />
        <img className="test3" src={avocado} alt="" />
      </FruitBoxTwo>
    </FruitContainer>
  );
}

export default Fruit;

const FruitContainer = styled.div`
  /* width: 100%;
  height: 100%; */
`;
const FruitBox = styled.div`
  display: flex;
  img {
    width: 25%;
  }
`;
const FruitBoxOne = styled.div`
  display: flex;
  img {
    width: 25%;
  }
`;
const FruitBoxTwo = styled.div`
  display: flex;
  img {
    width: 25%;
  }
`;
