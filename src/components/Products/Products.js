import React from "react";
import styled from "styled-components";
import menu from "../../assets/menu.jpg";
import avocado from "../../assets/avocadoShake.png";
import { Button } from "@material-ui/core";
function Products() {
  return (
    <ProductsContainer>
      <ProductFirstRow>
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>{" "}
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
      </ProductFirstRow>
      <ProductSecondRow>
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>{" "}
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Juice</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
      </ProductSecondRow>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  background: url(${menu});
  width: 100%;
  height: 120vh;
  object-fit: contain;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1200px) {
    height: 100vh;
  }
  @media screen and (max-width: 1050px) {
    height: 150vh;
  }
`;
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 300px;
    @media screen and (max-width: 1200px) {
      max-width: 200px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 1rem;
    color: #fff;
    border-radius: 20px;
    padding: 10px;
    background: #fa4e5c;
    :hover {
      color: #fa4e5c;
      border: 1px solid #fa4e5c;
    }
  }
`;
const ProductFirstRow = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ProductSecondRow = styled.div`
  display: flex;
  justify-content: center;
`;
