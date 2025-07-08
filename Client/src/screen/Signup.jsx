import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import axiosInstance from '../config/axios.js'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
  
    await axiosInstance.post('/users/register', {
      fullName,
      email,
      password
    })
    .then(() => {
      navigate('/login'); 
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Panel - DevSync AI Info */}
      <div className="md:w-1/2 bg-gradient-to-br from-[#111827] to-[#1f2937] text-white flex items-center justify-center px-10 py-16 relative overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl top-10 -left-16 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-2xl bottom-16 -right-20 animate-ping"></div>

        <div className="z-10 text-center md:text-left space-y-6 max-w-md">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
            DevSync <span className="text-blue-500">AI</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Join the future of intelligent development.<br />
            <span className="text-blue-400 font-semibold">Connect. Build. Scale.</span>
          </p>
          <p className="text-sm text-gray-500">
            Become a part of the developer evolution with smart tools.
          </p>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="md:w-1/2 bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-8 py-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Create your DevSync Account
          </h2>

          <form className="space-y-6" onSubmit = {submitHandler}>
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                onChange = {(e)=>{setFullName(e.target.value)}}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                onChange = {(e)=>{setEmail(e.target.value)}}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                onChange = {(e)=>{setPassword(e.target.value)}}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 text-2xl rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition shadow-md"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:underline font-medium">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
