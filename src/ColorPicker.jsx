import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFF000");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }} className="color-display">
        <p>Selected Color: {color}</p>
      </div>

      <label htmlFor="">Select a color</label>
      <input
        onChange={handleColorChange}
        value={color}
        type="color"
        name=""
        id=""
      />
    </div>
  );
}

export default ColorPicker;
