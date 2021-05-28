import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";
function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  return (
    <HeaderContainer>
      <NavImg>
        <img src={logo} alt="" />
      </NavImg>
      <MobileNavItme>
        {clicked ? (
          <ClearIcon className="icon" fontSize="large" onClick={handleClick} />
        ) : (
          <MenuIcon className="icon" fontSize="large" onClick={handleClick} />
        )}
      </MobileNavItme>

      <MobileNav className={clicked ? "nav-menu active" : "nav-menu"}>
        <ShoppingCartOutlinedIcon
          className="shoppingCart"
          style={{ paddingRight: "20px" }}
        />
        <SignInContent>
          <p>
            Hello <span>guest</span>
          </p>
          <Button className="mobileBtn">Log In</Button>
        </SignInContent>

        <NavLink href="/#home">Home</NavLink>
        <NavLink href="/#about">About</NavLink>
        <NavLink>Products</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
      </MobileNav>
      <NavItem>
        <NavLink href="/#home">Home</NavLink>
        <NavLink href="/#about">About</NavLink>
        <NavLink>
          <Link>Products</Link>
        </NavLink>
        <NavLink href="/#contact">Contact</NavLink>
        <NavLink>
          <ShoppingCartOutlinedIcon />
        </NavLink>

        <SignInContent>
          <p>
            Hello <span>guest</span>
          </p>
          <Button>Log In</Button>
        </SignInContent>
      </NavItem>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  /* background: transparent; */
  display: flex;
  justify-content: space-around;
  color: #fff;
  /* padding: 0.5rem calc((100vw- 1300px) / 2); */
  height: 80px;
  z-index: 100;
  /* @media screen and (max-width: 768px) {
    height: 160px;
  } */

  button {
    font-size: 13px;
    z-index: 100;
    background: #fcbc03;
    color: #fff;
    outline: none;
    font-weight: 500;
    border-radius: 20px;
    padding: 10px;

    :hover {
      background: transparent;
      color: #fcbc03;
      border: 1px solid #fcbc03;
    }
  }
  .nav-menu {
    cursor: pointer;
    padding-top: 100px;
    position: fixed;
    top: 0;
    right: 0;
    background: #222831;
    height: 100vh;
    width: 200px;
    -webkit-clip-path: circle(100px at 90% -60%);
    clip-path: circle(100px at 90% -60%);
    transition: all 0.5s ease-out;
    pointer-events: none;
  }
  .nav-menu.active {
    -webkit-clip-path: circle(1200px at 90% -10%);
    clip-path: circle(1200px at 50% -10%);
    pointer-events: all;
    background: #000000;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .mobileBtn {
    margin: 1rem 0;
    border-radius: 0;
    padding: 10px;
  }
`;
const NavImg = styled.div`
  flex: 0.5;
  z-index: 100;

  img {
    width: 150px;
    height: 80px;
  }
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a`
  text-decoration: none;
  z-index: 100;
  cursor: pointer;
  color: #fff;
  :hover {
    color: #fcbc03;
  }
  :not(:last-child) {
    padding-right: 2rem;
  }
  :last-child {
    padding-right: 3rem;
  }
  a {
    text-decoration: none;
    color: #fff;
    :hover {
      color: #fcbc03;
    }
  }
`;

const MobileNavItme = styled.div`
  cursor: pointer;

  display: none;
  @media screen and (max-width: 768px) {
    z-index: 200;
    display: flex;
    align-items: center;
  }
`;
const MobileNav = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: 768px) {
    display: block;
    z-index: 100;
  }

  a {
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid #fff;
    padding: 1rem;
    :last-child {
      border-bottom: 1px solid #fff;
    }
    :hover {
      color: #fa4e5c;
    }
  }
  .shoppingCart {
    position: absolute;
    top: 27px;
    left: 40px;
    :hover {
      color: #fcbc03;
    }
  }
`;
const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 300;
  p {
    text-align: center;
    color: #fff;
    font-size: 10px;
  }
  button {
    font-size: 10px;
    padding: 2px;
  }
`;
