"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { IncorrectTextBox } from './ui/IncorrectTextBox';

const App = () => {
  const useState = React.useState;
  const [state, setState] = useState(0);
  const handleClick = () => setState(state + 1);

  return (
    <div>
      <p>カウント: {state}</p>
      <div>
        <button onClick={handleClick}>count up</button>
      </div>
      <IncorrectTextBox label="Input your fisrt name." />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);