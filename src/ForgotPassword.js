import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import forgotpasswordicon from './forgotpassword.png';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if(email.trim()===''){
      alert("Please enter your email address")
    }
    else if(!emailRegex.test(email)) {
      setMessage('Invalid email address');
      return;
    }

   

    try {
      const response = await axios.post('https://elonleavemanagement.onrender.com/staff/forgotpassword', {
         email
        });
      setMessage(response.data.message);
      setSent(true);
      alert("otp sent")
      navigate('/verifyotp');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      {sent ? (
        <p>{message}</p>
      ) : (
        <div className="inputs">
          <div className="input">
            <img src={forgotpasswordicon} alt="password-img" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="submit-container">
            <button
              className="submit"
              onClick={(e) => {
                handleForgotPassword(e);
               
              }}
            >
              Send OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
