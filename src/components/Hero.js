import React from "react";
import styled from "styled-components";
import fapple from "../assets/fapple.mp4";
import crazy from "../assets/crazy.gif";
import { Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  AOS.init();
  return (
    <HeroContainer id="home">
      <HeroBg>
        <video src={fapple} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItemsTitle>
          <img src={crazy} alt="" />
          <p data-aos="fade-right" data-aos-duration="1000">
            Sweets, Smoothies
          </p>
          <p data-aos="fade-right" data-aos-duration="2000">
            desert e-commerce
          </p>
          <Button data-aos="fade-right" data-aos-duration="3000">
            SHOP NOW
          </Button>
        </HeroItemsTitle>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
const HeroContainer = styled.div`
  margin-top: -80px;

  position: relative;
  height: 100vh;
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
        rgb(255, 61, 96, 1) 0%,
        rgb(255, 61, 96, 0.8) 50%
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
  video {
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
