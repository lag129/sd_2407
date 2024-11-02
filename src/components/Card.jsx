"use strict";

import PropTypes from "prop-types";

const Card = ({ name, shozoku, tags, percent }) => {
  return (
    <div className="mx-auto rounded-lg shadow-lg p-6 bg-white border border-gray-200 mt-4 w-3/4 sm:w-1/4">
      {percent 
        ? <p>マッチ率：{parseInt({percent}, 10)}%</p> 
        : null
      }
      <p className="text-lg">名前：{name}</p>
      <p className="text-base">所属：{shozoku}</p>
      <p className="text-lg">タグ：{tags.join(" ")}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  shozoku: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  percent: PropTypes.number,
};

export default Card;