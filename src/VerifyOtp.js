import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import otpicon from "./otp1.png";
import { Link, useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  // const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    alert("Verification checked")
    try {
      const response = await axios.post("https://elonleavemanagement.onrender.com/staff/resetpassword", { 
        otp });
      setMessage(response.data.message);
      //setSent(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Verify OTP</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={otpicon} alt="password-img" />
          <input
            type="text"
            placeholder="Enter your otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <div className="submit-container">
          <button
            className="submit"
            onClick={(e) => {
              handleVerifyOtp(e);
              navigate("/updatepassword");
            }}
          >
            Submit
          </button>
        </div>
      </div></div>
    
  );
}

export default VerifyOtp;
