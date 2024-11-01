"use strict";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({ name, link }) => {
  const navigate = useNavigate();

  return(
    <div className="flex justify-center items-center mt-4">
      <button
        className="btn"
        onClick={() => navigate({ pathname: link })}
      >
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;