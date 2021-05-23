import React from "react";
import styled from "styled-components";
import apple from "../assets/apple.jpg";
import bananana from "../assets/bananana.jpg";
import lemon from "../assets/lemon.jpg";
import papple from "../assets/papple.jpg";
import avocado from "../assets/avocado.jpg";
import peach from "../assets/peach.jpg";
import orange from "../assets/orange.jpg";
import tomato from "../assets/tomato.jpg";

function Fruit() {
  return (
    <FruitContainer>
      <FruitBoxOne>
        <div>
          <img src={apple} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
        <div>
          <img src={peach} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
        <div>
          <img src={bananana} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
        <div>
          <img src={avocado} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
      </FruitBoxOne>
      <FruitBoxTwo>
        <div>
          {" "}
          <img src={lemon} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
        <div>
          {" "}
          <img src={papple} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
        <div>
          {" "}
          <img src={orange} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
        <div>
          {" "}
          <img src={tomato} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi qui
            temporibus harum necessitatibus.
          </p>
        </div>
      </FruitBoxTwo>
    </FruitContainer>
  );
}

export default Fruit;

const FruitContainer = styled.div`
  width: 100%;
`;
const FruitBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 25%;
  }
`;
const FruitBoxOne = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  div {
    height: 380px;

    opacity: 1;
    width: 25%;
    position: relative;
    transition: opacity 1s;

    img {
      width: 100%;
      height: 380px;
    }
    p {
      font-size: clamp(1rem, 1.2vw, 3rem);
      color: #fff;
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      text-shadow: 2px 2px gray;
    }

    :hover {
      cursor: pointer;
      opacity: 0.8;

      p {
        display: block;
      }
    }
  }

  @media screen and (max-width: 850px) {
    div {
      width: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    div {
      width: 100%;
    }
  }
`;
const FruitBoxTwo = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  div {
    height: 380px;

    opacity: 1;
    width: 25%;
    position: relative;
    transition: opacity 1s;

    img {
      width: 100%;
      height: 380px;
    }
    p {
      font-size: clamp(1rem, 1.2vw, 3rem);
      color: #fff;
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      text-shadow: 2px 2px gray;
    }

    :hover {
      cursor: pointer;
      opacity: 0.8;

      p {
        display: block;
      }
    }
  }

  @media screen and (max-width: 850px) {
    div {
      width: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    div {
      width: 100%;
    }
  }
`;
