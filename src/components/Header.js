import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button } from "@material-ui/core";
function Header() {
  return (
    <HeaderContainer>
      <NavImg>
        <img src={logo} alt="" />
      </NavImg>
      <NavItem>
        <NavLink>Home</NavLink>
        <NavLink>Popular</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>
          <ShoppingCartOutlinedIcon />
        </NavLink>

        <Btn>Log In</Btn>
      </NavItem>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  background: transparent;
  display: flex;
  justify-content: space-around;
  color: #fff;
  padding: 0.5rem calc((100vw- 1300px) / 2);
  height: 80px;
`;
const NavImg = styled.div`
  flex: 0.5;
  z-index: 100;

  img {
    width: 80px;
    height: 80px;
  }
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const NavLink = styled.a`
  z-index: 100;

  :not(:last-child) {
    padding-right: 2rem;
  }
  :last-child {
    padding-right: 3rem;
  }
`;
const Btn = styled(Button)`
  color: #fff !important;
  z-index: 100;
`;
