"use strict";

import { useNavigate } from 'react-router-dom';
import MeishiForm from '../components/MeishiForm';
import styles from './Button.module.css';

const ProfilePage = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/");
  }

  return (
    <div className={styles.button_prof}>
      <h1>プロフィールを入力</h1>

      <MeishiForm />
      {/* <button onClick={addsyumi}>追加</button> */}
      <button className={styles.button_Back} onClick={onMovePage}>ホームに戻る</button>
    </div>
  );
};

export default ProfilePage;