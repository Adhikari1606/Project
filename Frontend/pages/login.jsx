import React, { useState } from 'react';

const login = () => {
  const [loginType, setLoginType] = useState('');

  const handleButtonClick = (type) => {
    setLoginType(type);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-4 space-x-4">
          <button
            className="bg-mygreen text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => handleButtonClick('Student')}
          >
            Student
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => handleButtonClick('Company')}
          >
            Company
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={() => handleButtonClick('Collage')}
          >
            Collage
          </button>
        </div>
        {loginType && (
          <div className="mt-6">
            <h3 className="mb-4 text-xl font-semibold">{loginType} Login</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-left mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 space-y-2">
              <a href="#forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default login;