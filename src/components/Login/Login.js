import React from "react";
import styled from "styled-components";
import fapple from "../../assets/fapple.mp4";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginBg>
        <video src={fapple} type="video/mp4" autoPlay loop muted playsInline />
      </LoginBg>
      <LoginContentBox>
        <h1>Sign in</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button type="submit">Sign In</button>
          <h4>
            <span className="gray">New to Here? </span>
            <span className="link">Sign up Now.</span>
          </h4>
        </form>
      </LoginContentBox>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  color: #fff;
  position: relative;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginBg = styled.div`
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
const LoginContentBox = styled.div`
  z-index: 2;
  max-width: 300px;
  padding: 70px;

  background: rgba(249, 132, 4, 0.65);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  form {
    display: grid;
    flex-direction: column;
  }
  h1 {
    text-align: left;
    margin-bottom: 25px;
  }
  input {
    color: #111;
    outline-width: 0;
    height: 40px;
    margin-bottom: 14px;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
  }
  button {
    padding: 16px 20px;
    font-size: 1rem;
    border-radius: 5px;
    background-color: #fa4e5c;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    color: #fff;
    :hover {
      background-color: transparent;
      border: 1px solid #fa4e5c;
      color: #fa4e5c;
    }
  }
  h4 {
    text-align: left;
    margin-top: 30px;
    .gray {
      color: #fa4e5c;
    }
    .link:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
