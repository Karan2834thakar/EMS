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
    <div className="flex h-screen w-screen justify-center items-center bg-gray-100 px-4 sm:px-8">
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
            className="text-slate-800 hover:text-white outline-none mt-4 bg-emerald-700 text-lg sm:text-xl py-3 px-16 placeholder-slate-500 rounded-full active:scale-105 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
