
import React from 'react';

const Comsignup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="r">
        <h2 className="text-2xl font-semibold mb-4">Company Sign Up</h2>
        <form className="space-y-4">
          
            <div className="w-1/2">
              <label className="block text-left mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-left mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
              />
            
          </div>
        
            <div className="w-1/2">
              <label className="block text-left mb-1">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-left mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
         
          
            <div className="w-1/2">
              <label className="block text-left mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-left mb-1">Terms and Conditions</label>
              <input
                type="checkbox"
                name="termsAndConditions"
                className="w-full px-3 py-2 border rounded-md"
              />
          
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <a href="#sign-in" className="text-blue-500 hover:underline">
            Already have an account? Sign In
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="path/to/image" alt="Company Logo" />
      </div>
    </div>
  );
};

export default Comsignup;
