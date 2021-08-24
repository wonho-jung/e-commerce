import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  emptyCart,
  getBasketTotal,
  selectAddToCart,
  selectdeliveryAddress,
  selectUser,
} from "../../features/userSlice";
import CartProducts from "../Cart/CartProducts";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import axios from "../axios";
import { useHistory } from "react-router";
import db from "../firebase";

function Payment() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const shoppingCart = useSelector(selectAddToCart);
  const deliveryAddress = useSelector(selectdeliveryAddress);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  console.log(user?.uid);
  console.log(deliveryAddress);

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `/payments/create?total=${
          (
            parseFloat(getBasketTotal(shoppingCart).toFixed(2)) +
            parseFloat((getBasketTotal(shoppingCart) * 0.15).toFixed(2))
          ).toFixed(2) * 100
        }`,
      });
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret(clientSecret);
  }, [shoppingCart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("payment")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            deliveryAddress: deliveryAddress,
            shoppinglist: shoppingCart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(emptyCart());
        alert(
          `Your Order number is ${paymentIntent.id}. If you are member of JuiceLand then you can check your order on account&order`
        );
        history.replace("/");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <PaymentContainer>
      <PaymentAddress>
        <Title>
          {" "}
          <h3>Delivery Address</h3>
        </Title>
        <Content>
          {deliveryAddress?.address}, {deliveryAddress?.postalCode}
        </Content>
      </PaymentAddress>
      <PaymentProducts>
        <Title>
          <h3>Products</h3>{" "}
        </Title>
        <Content>
          {shoppingCart.map((item, index) => (
            <CartProducts
              index={index}
              key={index}
              img={item.img}
              alt={item.alt}
              name={item.name}
              desc={item.desc}
              price={item.price}
              special={item.special}
              chocolate={item.chocolate}
              disable
            />
          ))}
        </Content>
      </PaymentProducts>

      <PaymentCard>
        <Title>
          <h3>
            Payment Method <span>use this card number (4242424242424242)</span>
          </h3>
        </Title>
        <Content>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <h3 style={{ padding: "1rem 0" }}>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={(
                  parseFloat(getBasketTotal(shoppingCart).toFixed(2)) +
                  parseFloat((getBasketTotal(shoppingCart) * 0.15).toFixed(2))
                ).toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <button disabled={error || processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </form>
        </Content>
      </PaymentCard>
    </PaymentContainer>
  );
}

export default Payment;

const PaymentContainer = styled.div`
  background-color: #fbdbdc;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem 20%;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 3rem 10%;
  }
`;
const PaymentAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;
const PaymentProducts = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;
const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  button {
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    margin-top: 10px;
    color: #fff;
    border-radius: 20px;
    padding: 10px 20px;
    background: #fa4e5c;
    border: none;
    font-size: 15px;
    opacity: 0.7;
    :hover {
      opacity: 1;
    }
  }

  .payment__priceContainer {
    border-bottom: 2px solid #000000;
  }
`;
const Content = styled.div``;
const Title = styled.div`
  padding-bottom: 1rem;
  font-size: clamp(1rem, 2vw, 3rem);
  color: #fa4e5c;

  span {
    color: black;
    font-size: clamp(1rem, 1vw, 3rem);
  }
`;
