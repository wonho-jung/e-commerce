import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <NavItem>
        <NavLink>Home</NavLink>
        <NavLink>Popular</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Contact</NavLink>
      </NavItem>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav``;
const NavItem = styled.div``;
const NavLink = styled.a``;
