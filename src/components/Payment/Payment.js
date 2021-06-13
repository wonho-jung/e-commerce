import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  emptyCart,
  getBasketTotal,
  selectAddToCart,
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
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  console.log(user?.uid);

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
          .doc(paymentIntent.id)
          .set({
            shoppinglist: shoppingCart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(emptyCart());

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
        <Content></Content>
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
            />
          ))}
        </Content>
      </PaymentProducts>

      <PaymentCard>
        <Title>
          <h3>Payment Method</h3>
        </Title>
        <Content>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={(
                  parseFloat(getBasketTotal(shoppingCart).toFixed(2)) +
                  parseFloat((getBasketTotal(shoppingCart) * 0.15).toFixed(2))
                ).toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
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
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;
const PaymentAddress = styled.div`
  display: flex;
  width: 100%;
`;
const PaymentProducts = styled.div`
  display: flex;
  width: 100%;
`;
const PaymentCard = styled.div`
  display: flex;
  width: 100%;
`;
const Content = styled.div`
  flex: 0.8;
`;
const Title = styled.div`
  flex: 0.2;
`;
