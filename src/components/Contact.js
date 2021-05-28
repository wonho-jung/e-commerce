import React from "react";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import logo from "../assets/logo.png";
function Contact() {
  return (
    <ContactContainer id="contact">
      <ContentsFirstRow>
        <ContentLeft>
          <h5>Don't be shy, say Hi!</h5>

          <Info>
            <LocationOnOutlinedIcon />
            <p className="contentLeft-p">1411 du fort Montreal, QC</p>
          </Info>
          <Info>
            <WatchLaterOutlinedIcon />
            <p className="contentLeft-p">
              Mon-Sat: 8:00AM - 6:00PM, Sunday CLOSED
            </p>
          </Info>
          <Info>
            <EmailOutlinedIcon />

            <p className="contentLeft-p">test@test.com</p>
          </Info>
          <Info>
            <PhoneIphoneOutlinedIcon />

            <p className="contentLeft-p">123)123-1234</p>
          </Info>
        </ContentLeft>
        <ContentMid>
          <h5>Opening Hours</h5>
          <MidInfo>
            <p>Monday ............................ 10:00 - 22:00</p>
            <p>Tuesday ............................ 10:00 - 22:00</p>
            <p>Wednesday .......................10:00 - 22:00</p>
            <p>Thursday ........................... 10:00 - 22:00</p>
            <p>Friday ................................. 10:00 - 22:00</p>
            <p>Saturday ............................ 10:00 - 22:00</p>
            <p>Sunday ......................................... CLOSED</p>
          </MidInfo>
        </ContentMid>

        <ContentRight>
          <Info>
            <img src={logo} alt="" />
          </Info>
        </ContentRight>
      </ContentsFirstRow>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  background: #f29d0a;
  padding: 2rem 3rem;
  color: #fff;
  @media screen and (max-width: 765px) {
    padding: 2rem 1rem;
  }
`;
const ContentsFirstRow = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
  .MuiSvgIcon-root {
    font-size: 1rem;
    padding: 0.4rem 0;
    padding-right: 0.5rem;
  }
  h5 {
    padding-bottom: 1rem;
  }
  p {
    padding: 0.3rem 0;
    font-size: 0.8rem;
  }
`;

const ContentLeft = styled.div`
  @media screen and (max-width: 765px) {
    padding: 1rem 3rem;
  }
  .contentLeft-p {
    cursor: pointer;
    :hover {
      color: #fa4e5c;
    }
  }
`;
const ContentMid = styled.div`
  padding: 0 4rem;
  @media screen and (max-width: 765px) {
    padding: 0 3rem;
  }
`;
const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 150px;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
const Info = styled.div`
  display: flex;
`;
const MidInfo = styled.div``;
