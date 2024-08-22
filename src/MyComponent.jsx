import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <>
      <p>
        Your favourite car is the {car.year} {car.make} {car.model}
      </p>

      <h1>Edit Car Details</h1>
      <label>Year: </label>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <label>Make: </label>
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <label>Model: </label>
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </>
  );
}

export default MyComponent;
