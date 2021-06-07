import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../features/userSlice";
import bg from "../../assets/phonebg.jpg";
function Profile() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <ProfileContainer>
      <Profilescontent>
        <Avatar src={user.photoURL} />
        <InfoBox>
          <h5>
            UserName : <span>{user.displayname}</span>
          </h5>
          <h5>
            Email : <span>{user.user}</span>
          </h5>
          <h5>
            Address : <span>1411 du fort montreal, QC, Canada</span>
          </h5>
        </InfoBox>
        <Button>Update</Button>
      </Profilescontent>
      <Orderhistory>
        <h1>Order history</h1>
      </Orderhistory>
    </ProfileContainer>
  );
}

export default Profile;
const ProfileContainer = styled.div`
  box-sizing: border-box;
  background: url(${bg});
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Profilescontent = styled.div`
  background: #f6f5dd;
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 100px;

  border-right: 3px solid #fa4e5c;

  h5 {
    line-height: 1.5rem;
    font-size: clamp(0.9rem, 0.5vw, 2.4rem);
  }
  button {
    margin-top: 1rem;
    color: #fff;
    border-radius: 20px;
    padding: 3 2px;
    background: #fa4e5c;
    font-size: 9px;
    :hover {
      color: #fa4e5c;
      border: 1px solid #fa4e5c;
    }
  }
`;
const InfoBox = styled.div``;
const Orderhistory = styled.div`
  flex: 0.8;

  padding: 2rem;
  h1 {
    color: #fa4e5c;
  }
`;
