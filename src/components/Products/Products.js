import React from "react";
import styled from "styled-components";
import menu from "../../assets/menu.jpg";
import phonebg from "../../assets/phonebg.jpg";

import avocado from "../../assets/avocadoShake.png";
import bluebarryShake from "../../assets/bluebarryShake.png";
import orangeShake from "../../assets/orangeShake.png";
import choShakefrom from "../../assets/choShake.png";
import { Button } from "@material-ui/core";
import bananaSmt from "../../assets/bananaSmt.png";
import strwberrySmt from "../../assets/strwberrySmt.png";
import choSmt from "../../assets/choSmt.png";
import special from "../../assets/special.png";
import { productData } from "./data";
import { useDispatch } from "react-redux";
import { addToCart, selectAddToCart } from "../../features/userSlice";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Products() {
  const dispatch = useDispatch();
  console.log(productData);
  const cart = useSelector(selectAddToCart);
  console.log(cart);
  console.log(cart);
  const handleAdd = (item, index) => {
    //   addToCart({
    //     basket: {
    //       img: item.img,
    //     },
    //   })
    // );
  };
  return (
    <ProductsContainer>
      <ProductsGrid>
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            alt={item.alt}
            name={item.name}
            desc={item.desc}
            price={item.price}
            special={item.special ? item.special : false}
            chocolate={item.chocolate ? item.chocolate : false}
          />
        ))}
        {/* {productData.map((item, index) => (
          <ProductCard key={index}>
            <img
              className={
                item.chocolate || (item.special && item.chocolate)
                  ? item.chocolate
                  : item.special
              }
              src={item.img}
              alt={item.alt}
            />
            <Content>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <h5>{item.price}</h5>
              <Button onClick={handleAdd(item)}>ADD TO CART</Button>
            </Content>
          </ProductCard>
        ))} */}
        {/* <ProductCard>
          <img className={handleClass} src={img} alt={alt} />
          <Content>
            <h3>{name}</h3>
            <p>{desc}</p>
            <h5>{price}</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard> */}
        {/* <ProductCard>
          <img src={avocado} alt="" />
          <Content>
            <h3>Avocado Shake</h3>
            <p>Avocado, green vegetables, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={bluebarryShake} alt="" />
          <Content>
            <h3>Mixed Berry Shake</h3>
            <p>Mixed berry, banana, lemon</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>{" "}
        <ProductCard>
          <img src={orangeShake} alt="" />
          <Content>
            <h3>Mango Shake</h3>
            <p>Mango, yogurt, Strawberry</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img className="chocolate" src={choShakefrom} alt="" />
          <Content>
            <h3>Chocolate Shake</h3>
            <p>Chocolate, Strawberry, banana</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={bananaSmt} alt="" />
          <Content>
            <h3>Apple Smoothie</h3>
            <p>Avocado, green veg, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img src={strwberrySmt} alt="" />
          <Content>
            <h3>Strawberry Smoothie</h3>
            <p>Strawberry, banana, apple</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>{" "}
        <ProductCard>
          <img src={choSmt} alt="" />
          <Content>
            <h3>Dark Smoothie</h3>
            <p>Chocolate, Strawberry, banana</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard>
        <ProductCard>
          <img className="special" src={special} alt="" />
          <Content>
            <h3>Galaxy</h3>
            <p>All fruit, all dressed, apple juice</p>
            <h5>$5,99</h5>
            <Button>ADD TO CART</Button>
          </Content>
        </ProductCard> */}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  padding: 2rem 0;
  background: url(${phonebg});
  width: 100%;
  height: 130vh;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1200px) {
    height: 100vh;
  }
  @media screen and (max-width: 1050px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    background: url(${phonebg});
  }
`;
// const ProductCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   img {
//     max-width: 300px;
//     @media screen and (max-width: 1200px) {
//       max-width: 200px;
//     }
//   }
//   .chocolate {
//     max-width: 230px;
//     padding-bottom: 20px;
//     @media screen and (max-width: 1200px) {
//       max-width: 160px;
//       padding-bottom: 5px;
//     }
//   }
//   .special {
//     max-width: 215px;
//     @media screen and (max-width: 1200px) {
//       max-width: 145px;
//     }
//   }
// `;
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   h3 {
//     font-size: clamp(1rem, 1.5vw, 3rem);
//     color: #fa4e5c;
//     font-weight: 500;
//     text-shadow: 0.3px 0.4px #fff;
//   }
//   h5 {
//     font-size: clamp(1rem, 2vw, 3rem);
//   }
//   p {
//     font-size: clamp(1rem, 0.5vw, 3rem);
//   }
//   button {
//     margin-top: 1rem;
//     color: #fff;
//     border-radius: 20px;
//     padding: 10px;
//     background: #fa4e5c;
//     :hover {
//       color: #fa4e5c;
//       border: 1px solid #fa4e5c;
//     }
//   }
// `;
// const ProductFirstRow = styled.div`
//   display: flex;
//   justify-content: center;
//   @media screen and (max-width: 1050px) {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;
// const ProductSecondRow = styled.div`
//   display: flex;
//   justify-content: center;
// `;
const ProductsGrid = styled.div`
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
