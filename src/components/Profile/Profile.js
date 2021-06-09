import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../features/userSlice";
import bg from "../../assets/phonebg.jpg";
import db from "../firebase";
function Profile() {
  const [address, setAddress] = useState("");
  const [update, setUpdate] = useState(false);
  const [inputAddress, setInputAddress] = useState("");
  const [inputPostal, setInputPostal] = useState("");
  const user = useSelector(selectUser);
  console.log(user);

  const updateAddress = () => {
    setUpdate(true);
  };
  const handleSubmit = () => {
    if (inputAddress && inputPostal) {
      db.collection("users")
        .doc(user.uid)
        .collection("userInfo")
        .doc(user.uid)
        .set({
          userAddress: inputAddress,
          userPostalCode: inputPostal,
        });
      alert("Your address have been updated. ");
      setUpdate(false);
      setInputAddress("");
      setInputPostal("");
    } else {
      alert("Please fill up everything");
    }
  };
  const cancel = () => {
    setUpdate(false);
  };
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("userInfo")
        .onSnapshot((snapshot) => {
          setAddress(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [user]);
  return (
    <ProfileContainer>
      <Profilescontent>
        <Avatar src={user?.photoURL} />
        <InfoBox>
          <h5>
            Hello!{" "}
            <span>{user?.user.substring(0, user.user.indexOf("@"))}</span>
          </h5>

          <h5>
            Address :{" "}
            {address[0]?.data ? (
              <span>
                {address[0].data.userAddress},{address[0].data.userPostalCode}
              </span>
            ) : (
              <span>Enter your address.</span>
            )}
          </h5>
        </InfoBox>
        {update && (
          <Update>
            <input
              type="text"
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder="Enter a new address"
              style={{ marginBottom: "0.7rem" }}
            />
            <input
              type="text"
              value={inputPostal}
              onChange={(e) => setInputPostal(e.target.value)}
              placeholder="Enter a new postal code"
            />
            <div>
              <Button onClick={handleSubmit}>Update</Button>
              <Button onClick={cancel}>Cancel</Button>
            </div>
          </Update>
        )}
        <Button onClick={updateAddress} className={update && "updateClicked"}>
          Update
        </Button>
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
const Update = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    text-align: center;
    padding: 5px;
    outline-width: 0;
    border: none;
    border-radius: 5px;
    font-size: 0.7rem;
  }
  p {
    font-size: 0.7rem;
  }
  div {
    button {
      margin: 1rem;
    }
  }
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
  .updateClicked {
    display: none;
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
