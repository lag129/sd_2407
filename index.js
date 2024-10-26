"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const useState = React.useState;
  const [state, setState] = useState(0)
  const handleClick = () => setState(state + 1)

  return (
    <div>
      <p>カウント: {state}</p>
      <div>
        <button onClick={handleClick}>count up</button>
      </div>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);