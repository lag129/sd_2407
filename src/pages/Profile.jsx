"use strict";

import { useNavigate } from 'react-router-dom';
import MeishiForm from '../components/MeishiForm';

const ProfilePage = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/");
  }

  return (
    <div>
      <div className="block relative bg-white bg-cover bg-repeat text-center w-full text-[25px]">
        <h1>プロフィールを入力</h1>
      </div>
      <MeishiForm />
      <button
        className="btn"
        onClick={onMovePage}
      >
        ホームに戻る
      </button>
    </div>
  );
};

export default ProfilePage;