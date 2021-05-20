import React from "react";
import styled from "styled-components";
import fapple from "../assets/fapple.mp4";
function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <video src={fapple} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItemsTitle>
          <h1>Love</h1>
          <h1> your self</h1>
        </HeroItemsTitle>
        <HeroItems>
          <p>
            Our cold-pressed juices give you the maximum amount of nutrients we
            can possibly sqeeze into each bottle.
          </p>
        </HeroItems>
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
`;
const HeroItemsTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  left: 20%;
  max-height: 100%;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  border-left: 30px solid red;
  border-bottom: 30px solid red;
  h1 {
    font-size: clamp(1.5rem, 6vw, 4rem);
  }
`;
const HeroItems = styled.div`
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  position: absolute;
  left: 20%;
  top: 80%;
`;
