"use strict";

import PropTypes from "prop-types";

const Card = ({ name, shozoku, tags, percent }) => {
  return (
    <div className="rounded-md shadow-lg p-6 bg-white border border-gray-200">
      {percent 
        ? <p>マッチ率：{parseInt({percent}, 10)}%</p> 
        : null
      }
      <p className="text-2xl">名前：{name}</p>
      <p className="text-xl">所属：{shozoku}</p>
      <p>タグ：{tags.join(" ")}</p>
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