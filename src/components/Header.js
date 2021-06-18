import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { login, selectAddToCart, selectUser } from "../features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
function Header() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const [clicked, setClicked] = useState(false);
  const [nav, setNav] = useState("transparent");
  console.log(nav);
  console.log(user?.user);
  const handleClick = () => setClicked(!clicked);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut();
    history.push("/login");
    dispatch(login({ user: null }));
  };
  const shoppingCart = useSelector(selectAddToCart);

  const scroll = () => {
    if (window.scrollY > 200) {
      setNav("#f29d0a");
    } else {
      setNav("transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  console.log(shoppingCart.length);
  return (
    <HeaderContainer
      style={{
        backgroundColor: nav,
        transition: "0.5s",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
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
        <Link
          className="shoppingHover"
          to="/cart"
          style={{ padding: "0", border: "none" }}
        >
          <ShoppingCartOutlinedIcon
            className="shoppingCart"
            style={{ paddingRight: "20px" }}
          />
          <span className="ProductNum">{shoppingCart.length}</span>
        </Link>

        <SignInContent>
          <p>
            Hello! <span>{user ? user.user : "guest"}</span>
          </p>
          {user ? (
            <Link>
              <Button className="mobileBtn" onClick={signOut}>
                Sign Out
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button className="mobileBtn">Sign In</Button>
            </Link>
          )}
        </SignInContent>

        <NavLink href="/#products">
          {" "}
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/products">Products</Link>
        </NavLink>
        {user && (
          <NavLink>
            <Link to="/profile">Account&Orders</Link>
          </NavLink>
        )}
      </MobileNav>

      <NavItem>
        <NavLink>
          {" "}
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/products">Products</Link>
        </NavLink>
        {!user ? (
          <>
            {" "}
            <NavLink>
              <Link to="/profile" style={{ pointerEvents: "none" }}>
                Account&Orders
              </Link>
            </NavLink>
          </>
        ) : (
          <>
            {" "}
            <NavLink>
              <Link to="/profile">Account&Orders</Link>
            </NavLink>
          </>
        )}

        <NavLink className="shoppingCartDesktop">
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
            <span>{shoppingCart.length}</span>
          </Link>
        </NavLink>

        <SignInContent>
          <p>
            Hello!{" "}
            <span>
              {user
                ? `${user.user.substring(0, user.user.indexOf("@"))}`
                : "guest"}
            </span>
          </p>
          {user ? (
            <Link>
              <Button className="desktopBtn" onClick={signOut}>
                Sign Out
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button className="desktopBtn">Sign In</Button>
            </Link>
          )}
        </SignInContent>
      </NavItem>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  width: 100%;
  z-index: 400;
  display: flex;
  justify-content: space-around;
  color: #fff;
  height: 80px;

  button {
    font-size: 13px;
    z-index: 100;
    background: #fcbc03;
    color: #fff;
    outline: none;
    font-weight: 500;
    border-radius: 20px;
    padding: 10px;
    text-decoration: none;

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
    width: 100%;
    border-radius: 5px;
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
  .shoppingCartDesktop {
    position: relative;
    span {
      position: absolute;
      top: -15px;
      left: 8px;
    }
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
  .shoppingHover {
    color: #fff;
    :hover {
      color: #fcbc03 !important;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    z-index: 100;
  }

  a {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #fff;
    padding: 1rem;
    text-decoration: none;

    :hover {
      color: #fcbc03;
    }
    a {
      padding: 0;
      border: none;
    }
  }

  .shoppingCart {
    position: absolute;
    top: 27px;
    left: 40px;
    color: #fff;
    border: none;
    :hover {
      color: #fcbc03;
    }
  }
  .ProductNum {
    position: absolute;
    top: 6px;
    left: 47px;
    color: #fff;
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
  a {
    text-decoration: none;

    .desktopBtn {
      font-size: 10px;
      padding: 2px;
    }
  }
`;
