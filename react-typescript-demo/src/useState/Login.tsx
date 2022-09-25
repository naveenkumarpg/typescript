import { useState } from 'react';

type isLoginProps = {
  name: string;
  email: string;
};

export const LoggedStatus = () => {
  const [isLogin, setIsLogin] = useState<null | isLoginProps>(null);

  const handleLoginClick = () => {
    setIsLogin({
      name: 'Naveen',
      email: 'naveen@example.com'
    });
  };

  const handleLogOutClick = () => {
    setIsLogin(null);
  };

  return (
    <div>
      {!isLogin && <button onClick={handleLoginClick}>Log In</button>}
      {isLogin && <button onClick={handleLogOutClick}>Log Out</button>}
      <br />
      <p>Logged in user Name : {isLogin?.name} </p>
      <p>Logged in user email : {isLogin?.email}</p>
    </div>
  );
};
