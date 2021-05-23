import React from "react";
import styled from "styled-components";
import strwberry from "../assets/strwberry.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import banana from "../assets/smile.jpg";
SwiperCore.use([EffectCoverflow, Pagination]);

function About() {
  return (
    <AboutContainer>
      <h1>What People are Saying</h1>
      <Content>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideBg />

            <ContentBox>
              <h3>Jay</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />

            <ContentBox>
              <h3>Edward</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>David</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>Samuel</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>Joash</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>Poul</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>Sara</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>Stella</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideBg />
            <ContentBox>
              <h3>Jun</h3>
              <p>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque esse atque magni rem consectetur aspernatur id
                necessitatibus optio error, cumque minima quidem. Commodi dolore
                deleniti eos enim voluptas cum iste."
              </p>
            </ContentBox>{" "}
          </SwiperSlide>
        </Swiper>
      </Content>
    </AboutContainer>
  );
}

export default About;
const AboutContainer = styled.div`
  background-image: url(${strwberry});
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  align-items: center;
  color: #fff;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    position: relative;
    background-position: center;
    background-size: cover;

    width: 300px;
    height: 300px;
    :hover {
      div {
        opacity: 1;
      }
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
const ContentBox = styled.div`
  position: absolute;
  top: 0;
  padding: 2rem;
  h3 {
    font-size: clamp(1rem, 1.2vw, 3rem);

    padding-bottom: 1rem;
  }
  p {
    text-shadow: 1px 1px gray;
    font-size: clamp(1rem, 1.2vw, 3rem);
    font-weight: 400;
  }
`;
const SlideBg = styled.div`
  background-image: url(${banana});
  background-size: cover;
  width: 300px;
  height: 300px;
  opacity: 0.7;
`;
