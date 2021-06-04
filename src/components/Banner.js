import React from "react";
import styled from "styled-components";
import EmojiNatureOutlinedIcon from "@material-ui/icons/EmojiNatureOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import smoothie from "../assets/smoothie.png";
function Banner() {
  return (
    <BannerContainer>
      <BannerLeft>
        <ContentOne data-aos="fade-right" data-aos-duration="1000">
          <Content>
            <h1>100% ORGANIC</h1>
            <p>
              We make our products from 100% organic and fresh ingredients full
              of vitamins and nutrients.
            </p>
          </Content>
          <Icon>
            <EmojiNatureOutlinedIcon />
          </Icon>
        </ContentOne>

        <ContentTwo data-aos="fade-right" data-aos-duration="1000">
          <Content>
            <h1>GOOD FOR HEALTH</h1>
            <p>
              Our drinks are exceptionally good for boosting your health and
              increasing your energy level.
            </p>
          </Content>
          <Icon>
            <FavoriteIcon />
          </Icon>
        </ContentTwo>
      </BannerLeft>
      <BannerCenter data-aos="fade-down" data-aos-duration="1500">
        <img src={smoothie} alt="" />
      </BannerCenter>
      <BannerRight>
        <ContentOne data-aos="fade-left" data-aos-duration="1000">
          <Content>
            <h1>NO ADDITIVES</h1>
            <p>
              Our smoothies, healthy drinks, and energy bowls contain no
              artificial additives, only vital elements.
            </p>
          </Content>
          <Icon>
            <BlockOutlinedIcon />
          </Icon>
        </ContentOne>
        <ContentTwo data-aos="fade-left" data-aos-duration="1000">
          <Content>
            <h1>A LOT OF ENERGY</h1>
            <p>
              We designed our products as the universal organic energetics that
              can quench your thirst.
            </p>
          </Content>
          <Icon>
            <FitnessCenterIcon />
          </Icon>
        </ContentTwo>
      </BannerRight>
    </BannerContainer>
  );
}

export default Banner;
const BannerContainer = styled.div`
  color: #fff;
  background: #00cad0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; ;
`;
const ContentOne = styled.div`
  display: flex;
  max-width: 400px;
  padding: 3rem 0;
`;
const Content = styled.div`
  h1 {
    font-weight: 500;
    font-size: clamp(1.2rem, 3vw, 2rem);
  }
  p {
    font-size: clamp(1rem, 1vw, 3rem);
  }
`;
const Icon = styled.div`
  padding: 10px;
  .MuiSvgIcon-root {
    font-size: clamp(1.2rem, 5vw, 3rem);
  }
`;
const ContentTwo = styled.div`
  display: flex;
  max-width: 400px;
`;
const BannerCenter = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 70%;
  }
  //   @media screen and (max-width: 1050px) {
  //     display: grid;
  //     grid-template-columns: repeat(3, 1fr);
  //   }
`;
const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
`;
