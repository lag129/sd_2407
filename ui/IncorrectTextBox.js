import React from 'react';

export const IncorrectTextBox = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <label style={{ display: "block" }}>
      {`${props.label} `}
      <input
        value={value}
        onChange={event => setValue(event.target.value)} />
    </label>
  );
};