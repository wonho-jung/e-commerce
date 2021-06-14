import React from "react";
import styled from "styled-components";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Orderlist({ order }) {
  console.log(order.data.deliveryAddress.address[0]);
  return (
    <OrderlistContainer>
      <h3>Order number: {order.id}</h3>
      <h5>
        Order date:{" "}
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </h5>
      <h5>
        Ship to: {order.data.deliveryAddress.address[0]},{" "}
        {order.data.deliveryAddress.postalCode[0]}
      </h5>
      <CurrencyFormat
        renderText={(value) => (
          <h5 className="order__total">Order Total: {value}</h5>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {order.data.shoppinglist.map((item) => (
        <OrderHistoryContent>
          <img
            src={item.img}
            alt={item.alt}
            className={
              item.chocolate || (item.special && item.chocolate)
                ? item.chocolate
                : item.special
            }
          />
          <HistoryContent>
            <h5>{item.name}</h5>
            <h5>${item.price}</h5>
          </HistoryContent>
        </OrderHistoryContent>
      ))}
    </OrderlistContainer>
  );
}

export default Orderlist;

const OrderlistContainer = styled.div`
  padding: 2rem;
  height: 100%;
  border-bottom: 3px solid #000000;

  h3 {
    font-size: clamp(1rem, 1.2vw, 3rem);
    color: #fa4e5c;
    font-weight: 500;
    text-shadow: 0.3px 0.4px #fff;
    padding-bottom: 0.2rem;
  }
  h5 {
    font-size: clamp(0.9rem, 0.5vw, 2.4rem);
  }
  p {
    font-size: clamp(0.8rem, 0.1vw, 2rem);
    padding-bottom: 0.1rem;
  }
`;
const OrderHistoryContent = styled.div`
  display: flex;
  border-bottom: 1px solid #000000;
  img {
    width: 200px;
  }
  .chocolate {
    width: 160px;
    padding-left: 25px;
    padding-right: 15px;
  }
  .special {
    width: 160px;
    padding: 0 20px;
  }
`;
const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
