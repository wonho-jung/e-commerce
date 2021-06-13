import React from "react";
import styled from "styled-components";

function Orderlist({ order }) {
  console.log(order);
  return (
    <OrderlistContainer>
      <h5>{order.id}</h5>
    </OrderlistContainer>
  );
}

export default Orderlist;

const OrderlistContainer = styled.div``;
