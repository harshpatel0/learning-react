import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0); // The argument passed in is for a default value
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Guest");
  };

  const incrementAge = () => {
    setAge(age + 3);
  };

  const toggleEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increase Age</button>
        <p>Employment Status: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmploymentStatus}>
          Toggle Employment Status
        </button>
      </div>
    </>
  );
}

export default MyComponent;
