import React from 'react';
import Container from '../../components/common/Container';
import TextField from '../../components/common/TextField';
import mail from '../../assets/icons/auth/mail.png';
import lock from '../../assets/icons/auth/lock.png';
import Button from '../../components/common/Button';

const Login = () => {
  return (
    <div id="login">
      <Container>
        <div className="relative w-full min-h-screen md:min-h-0 md:h-[792px] overflow-auto [&::-webkit-scrollbar]:hidden bg-brand-brown pt-[20%]">
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
                value="willsmith@iloveu.com"
                id="email"
              />
              <TextField
                icon={lock}
                type="password"
                label="Password"
                value="willsmith@iloveu.com"
                id="email"
              />
              <p className="text-right text-[14px] font-manrope text-brand-mid-gray">
                Forget Password?
              </p>
              <Button text="Login" className="px-10" />
            </form>
            <form className="mt-[30px]"></form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
