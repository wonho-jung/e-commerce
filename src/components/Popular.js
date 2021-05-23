import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import triangle from "../assets/triangle.png";
import mix from "../assets/salemixfriut.png";
function Popular() {
  return (
    <PopularContainer>
      <PopularLeft>
        <img src={triangle} alt="" />
        <LeftPrice>
          <h2>$19.99</h2>
          <h1>$9.99</h1>
        </LeftPrice>
      </PopularLeft>

      <PopularRight>
        <img src={mix} alt="" />
        <Content>
          <h1>4 in the mix</h1>

          <p>
            This week we offer 4 different flavours for a special discount
            price. Enjoy it while it lasts!
          </p>
          <Button>ORDER NOW</Button>
        </Content>
      </PopularRight>
    </PopularContainer>
  );
}
export default Popular;
const PopularContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const PopularLeft = styled.div`
  position: relative;
  background-color: #f6f5dd;
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding: 2rem;
    padding-left: 0;
    max-width: 400px;
  }
  @media screen and (max-width: 500px) {
    img {
      padding-left: 0;
      max-width: 300px;
    }
  }
`;
const PopularRight = styled.div`
  background-color: #fcbc03;
  flex: 0.6;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  img {
    position: absolute;
    max-width: 400px;
    top: 100px;
    right: 10%;
    :hover {
    }
  }
`;
const Content = styled.div`
  color: #fff;
  max-width: 400px;
  padding: 0 2rem;
  margin-top: 20%;
  margin-left: 5%;

  position: relative;
  button {
    margin-top: 2rem;
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
const LeftPrice = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
  color: #f6f5dd;
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2rem;
    text-decoration-line: line-through;
  }
  p {
    font-size: clamp(1rem, 3vw, 3rem);
  }
`;
