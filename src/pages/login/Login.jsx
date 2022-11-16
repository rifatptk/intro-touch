import Container from '../../components/common/Container';
import TextField from '../../components/common/TextField';
import mail from '../../assets/icons/auth/mail.png';
import lock from '../../assets/icons/auth/lock.png';
import Button from '../../components/common/Button';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ auth, setauth }) => {
  const [data, setData] = useState({
    email: 'willsmith@iloveu.com',
    password: 'willsmith@iloveu.com',
  });
  function login(e) {
    e.preventDefault();
    setauth(true);
  }
  if (auth) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div id="login">
      <Container>
        <div className="relative w-full min-h-screen sm:min-h-0 sm:h-[calc(100vh-48px)] overflow-auto [&::-webkit-scrollbar]:hidden bg-brand-brown pt-[100px]">
          <div className="text-white font-bold w-fit mx-auto leading-[1]">
            <h1 className="text-[36px]">IntroTouch</h1>
            <p className=" text-right ">.com</p>
          </div>

          <div className="absolute bottom-0 w-full bg-white py-[36px] px-6 rounded-t-[20px]">
            <h1 className="text-center text-xl text-brand-dark-gray font-extrabold font-manrope">
              LOGIN
            </h1>
            <form className="space-y-[36px] mt-10">
              <TextField
                icon={mail}
                label="Email ID"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="email"
              />
              <TextField
                icon={lock}
                type="password"
                label="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="password"
              />
              <p className="text-right text-[14px] font-manrope text-brand-mid-gray">
                Forget Password?
              </p>
              <Button text="Login" className="px-10" onClick={login} />
            </form>
            <form className="mt-[30px]"></form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
