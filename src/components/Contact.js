import React from "react";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
function Contact() {
  return (
    <ContactContainer>
      <ContentsFirstRow>
        <Content>
          <LocationOnOutlinedIcon />

          <Info>
            <h2>LOCATION</h2>
            <p>1411 du fort</p>
            <p>Montreal, QC</p>
          </Info>
        </Content>
        <Content>
          <WatchLaterOutlinedIcon />

          <Info>
            {" "}
            <h2>HOUR</h2>
            <p>Mon-Fri: 8:00AM - 6:00PM</p>
            <p>Sat-Sun: 9:00AM - 8:00PM</p>
          </Info>
        </Content>
      </ContentsFirstRow>
      <ContentsSecondRow>
        <Content>
          <EmailOutlinedIcon />

          <Info>
            {" "}
            <h2>E-mail</h2>
            <p>test@test.com</p>
            <p>test@test.com</p>
          </Info>
        </Content>
        <Content>
          <PhoneIphoneOutlinedIcon />

          <Info>
            {" "}
            <h2>Call US</h2>
            <p>123)123-1234</p>
            <p>123)123-1234</p>
          </Info>
        </Content>
      </ContentsSecondRow>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  background-color: #fcbc03;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* padding: 0 2rem; */
`;
const ContentsFirstRow = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentsSecondRow = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 50%;
  display: flex;
  .MuiSvgIcon-root {
    padding: 0.5rem;
    font-size: 2rem;
  }
  /* padding: 0 2rem; */
  h3 {
    font-size: clamp(1rem, 1vw, 3rem);
  }
  p {
    font-size: clamp(1rem, 0.5vw, 3rem);
  }
`;
const Info = styled.div``;
