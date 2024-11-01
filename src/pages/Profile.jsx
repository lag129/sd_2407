"use strict";

import Button from '../components/Button';
import ProfileForm from '../components/ProfileForm';

const ProfilePage = () => {
  return (
    <div className="mx-auto">
      <div className="block relative bg-white bg-cover bg-repeat text-center w-full text-[25px]">
        <h1>プロフィールを入力</h1>
      </div>
      <ProfileForm />
      <Button name="ホームに戻る" link="/" />
    </div>
  );
};

export default ProfilePage;