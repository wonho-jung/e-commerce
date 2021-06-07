import React from "react";
import styled from "styled-components";
import fapple from "../../assets/cart.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function CartHero() {
  AOS.init();
  return (
    <HeroContainer id="home">
      <HeroBg>
        <img src={fapple} />
      </HeroBg>
      <HeroContent>
        <HeroItemsTitle>
          <p>
            <span className="pink">Your shop</span>
            <span className="p">p</span>
            <span className="white">ing Basket</span>
          </p>
        </HeroItemsTitle>
      </HeroContent>
    </HeroContainer>
  );
}

export default CartHero;
const HeroContainer = styled.div`
  margin-top: -80px;

  position: relative;
  height: 50vh;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;

    background: linear-gradient(
        180deg,
        rgb(0, 0, 0, 0.15) 0%,
        rgb(0, 0, 0, 0) 30%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, transparent 10%);
  }
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
const HeroContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const HeroItemsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  img {
    height: auto;
    max-width: 100%;
  }
  p {
    .pink {
      color: #ffa9ba;
    }
    .p {
      background-image: linear-gradient(90deg, #ffa9ba, #fff);

      background-size: 100%;
      background-repeat: cover;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
    text-transform: uppercase;
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 1rem;
  }
  button {
    background: #fcbc03;
    color: #fff;
    outline: none;
    font-weight: bold;
    border-radius: 20px;
    padding: 10px;

    :hover {
      background: transparent;
      color: #fcbc03;
      border: 1px solid #fcbc03;
    }
  }
`;
