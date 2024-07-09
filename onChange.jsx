import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
    if (quantity < 0) {
      setQuantity(0);
    }
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentMethodChange(e) {
    setPaymentMethod(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <h3>Harsh's Store | Scamming customers day by day</h3>
      <h1>Edit Delivery Details</h1>
      <p>Current Name: {name}</p>
      <input placeholder="" type="text" onChange={(e) => handleNameChange(e)} />

      <p>Order Quantity: {quantity}</p>
      <input type="number" onChange={(e) => handleQuantityChange(e)} />

      <p>Additional Delivery Instructions: {comment}</p>
      <textarea
        placeholder="Additional Delivery Instructions e.g., leave the package on the backyard inside the box"
        onChange={(e) => handleCommentChange(e)}
      ></textarea>

      <p>Payment Method: {paymentMethod}</p>
      <select value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">Select an option</option>
        <option value="VISA">VISA</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Gift Card">Gift Card</option>
      </select>

      <p>Shipping Method: {shipping}</p>
      <label htmlFor="">Pick up</label>
      <input
        value="Pick up"
        checked={shipping === "Pick up"}
        onChange={handleShippingChange}
        type="radio"
        name=""
        id=""
      />
      <br />
      <label htmlFor="">Delivery</label>
      <input
        value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShippingChange}
        type="radio"
        name=""
        id=""
      />
    </div>
  );
}

export default MyComponent;
