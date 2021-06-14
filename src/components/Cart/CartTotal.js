import React, { useEffect } from "react";
import styled from "styled-components";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useState } from "react";
import { Button } from "@material-ui/core";
import {
  deliveryAddress,
  getBasketTotal,
  selectAddToCart,
  selectUser,
} from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import db from "../firebase";
import { useHistory } from "react-router";
function CartTotal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const carts = useSelector(selectAddToCart);
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  console.log(carts);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("userInfo")

        .onSnapshot((snapshot) => {
          setAddress(snapshot.docs.map((doc) => doc.data().userAddress));
          setPostalCode(snapshot.docs.map((doc) => doc.data().userPostalCode));
        });
    }
  }, [user]);

  const handleChange = (address) => {
    setAddress(address);
  };
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
    setAddress(address);
  };
  const saveInfo = () => {
    if (user) {
      if (address && postalCode) {
        db.collection("users")
          .doc(user.uid)
          .collection("userInfo")
          .doc(user.uid)
          .set({
            userAddress: address,
            userPostalCode: postalCode,
          });
        alert("Thank you. You can check your address in Account&Order page.");
      } else {
        alert("Please fill up everything...");
      }
    } else {
      alert("You need to login first...");
    }
  };
  const handleCheckOut = () => {
    if (address && postalCode) {
      dispatch(deliveryAddress({ address, postalCode }));
      history.push("/payment");
    } else {
      alert("Check your address");
    }
  };
  return (
    <CartTotalContainer>
      <h1 style={{ textAlign: "center", padding: "1rem 0", color: "#fa4e5c" }}>
        CART TOTALS
      </h1>
      <SubtotalBox>
        <FirstRow>
          <h3>Shipping</h3>
          <AddressContent>
            <p>Address</p>
            <PlacesAutocomplete
              value={address}
              onChange={handleChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Search Places ...",
                      className: "location-search-input",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          className="input-suggestion"
                          {...getSuggestionItemProps(suggestion, {
                            style,
                          })}
                        >
                          <LocationOnIcon />
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>

            <p>Postal Code/ZIP</p>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Enter a postal code ..."
            />

            <br />
            <Button className="save" onClick={saveInfo}>
              Save as my address
            </Button>
          </AddressContent>
        </FirstRow>

        <SecondRow>
          <div>
            <h3>
              Subtotal( <span>{carts.length}</span> item)
            </h3>
            <h3>Tax </h3>
            <h3>Total</h3>
          </div>
          <div>
            <p>${getBasketTotal(carts).toFixed(2)}</p>
            <p>${(getBasketTotal(carts) * 0.15).toFixed(2)}</p>
            <p>
              $
              {(
                parseFloat(getBasketTotal(carts).toFixed(2)) +
                parseFloat((getBasketTotal(carts) * 0.15).toFixed(2))
              ).toFixed(2)}
            </p>
          </div>
        </SecondRow>
        <ThirdRow>
          <Button className="check-out" onClick={handleCheckOut}>
            PROCEED TO CHECKOUT
          </Button>
        </ThirdRow>
      </SubtotalBox>
    </CartTotalContainer>
  );
}

export default CartTotal;

const CartTotalContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  border-top: 1px solid #fa4e5c;
  border-bottom: 1px solid #fa4e5c;
  .save {
    display: flex;
    margin: 0 auto;
    color: #fff;
    margin-top: 10px;
    font-size: 9px;
    border-radius: 20px;
    padding: 5px;
    background: #fa4e5c;
    :hover {
      color: #fa4e5c;
      border: 1px solid #fa4e5c;
    }
  }
  .check-out {
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
const SubtotalBox = styled.div``;
const FirstRow = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  .location-search-input {
    padding: 5px;
    outline-width: 0;
    border: none;
    max-width: 600;
    border-radius: 5px;
  }
  input {
    padding: 5px;
    outline-width: 0;
    border: none;
    border-radius: 5px;
    font-size: 0.7rem;
  }
  p {
    font-size: 0.7rem;
  }
  .input-suggestion {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    border-bottom: 1px solid #000000;
  }
`;
const SecondRow = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
`;
const AddressContent = styled.div``;
const ThirdRow = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;
