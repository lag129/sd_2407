"use strict";

import React from 'react';

const JoinGroup = () => {
  return(
    <div>
      <h1>グループに参加</h1>
      <p>グループIDを入力してください</p>
      <input type="text" id="groupID" />
      <button>参加</button>
    </div>
  );
};

export default JoinGroup;