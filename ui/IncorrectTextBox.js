

import React from 'react';
import ReactDOM from 'react-dom/client';

export const IncorrectTextBox = () => {
  const [value, setValue] = React.useState("");

  return (
    <label style={{ display: "block" }}>
      {`${props.label} `} 
      <input
        value={value}
        onChange={event => setValue(event.target.value)} />
    </label>
  );
}




