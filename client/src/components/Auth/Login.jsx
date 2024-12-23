import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {/* Welcome Header */}
      <div className="absolute inset-x-0 top-10 mx-auto text-center w-full px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-emerald-400">
          Welcome to Workforce Manager
        </h1>
      </div>

      {/* Login Form */}
      <div className="flex h-screen w-full justify-center items-center bg-black-100 px-4 sm:px-8">
        <div className="border-2 rounded-xl border-emerald-700 p-8 sm:p-12 md:p-16 lg:p-20 w-full max-w-md">
          <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center">
            <input
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none bg-transparent text-lg sm:text-xl py-3 px-5 border-2 border-emerald-700 placeholder-slate-500 rounded-full w-full mb-4"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none bg-transparent text-lg sm:text-xl py-3 px-5 border-2 mt-4 border-emerald-700 placeholder-slate-500 rounded-full w-full mb-4"
              type="password"
              placeholder="Enter Your Password"
            />
            <button
              type="submit"
              className="text-slate-800 hover:text-white outline-none mt-4 bg-emerald-700 text-lg sm:text-xl py-3 px-16 placeholder-slate-500 rounded-full active:scale-105 w-full"
            >
              Login
            </button>
          </form>

          {/* Instructions below the form */}
          <div className="mt-6 text-center text-sm sm:text-base text-gray-400">
            <p className="mb-2">Please use the following credentials to log in:</p>
            <p className="font-semibold text-emerald-400 mt-2">Admin: admin@example.com / password</p>
            <p className="font-semibold text-emerald-400 mt-1">Employee: employee@example.com / password</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
