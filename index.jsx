"use strict";

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

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);