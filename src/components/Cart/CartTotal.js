import React from "react";
import styled from "styled-components";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useState } from "react";
import { Button } from "@material-ui/core";

function CartTotal() {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [name, setName] = useState("");

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
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
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
            <p>Full name (First and Last name)</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name ..."
            />
          </AddressContent>
        </FirstRow>

        <SecondRow>
          {" "}
          <h3>
            Subtotal( <span>0</span> item)
          </h3>
          <p>$59,99</p>
        </SecondRow>
        <ThirdRow>
          <Button>PROCEED TO CHECKOUT</Button>
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
  button {
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
  }
  p {
    font-size: 0.7rem;
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
