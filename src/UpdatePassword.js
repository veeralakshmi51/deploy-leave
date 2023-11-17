import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import forgotpasswordicon from './forgotpassword.png';
import usericon from './user.png';
import passwordicon from './password.png'



const UpdatePassword = () => {
  const [username, setUsername] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate = useNavigate();
  //const [lists, setLists] = useState('');

  // const getAPI = async () => {
  //   try {
  //     const result = await axios.get(
  //       'https://admin-wo72.onrender.com/api/admin',
  //     );
  //     console.log(result.data);
  //     setLists(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAPI();
  // }, []);

  const handleUpdatepassword = async e => {
    e.preventDefault();
    try {
      if (newpassword === confirmpassword) {
        const result = await axios.put(`https://elonleavemanagement.onrender.com/staff/detail/${username}`,
          {
            password: newpassword,
          },
        );
        console.log(result);
        alert('Password changed');
        window.location.reload()
        // getAPI();
      } else {
        alert('Newpassword and Confirmpassword is not matched');
        console.log(username);
        console.log(newpassword);
      }
    } catch (error) {
      alert(error);
    }
    // alert(username)
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Update Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={usericon} alt="user-img" />
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <img src={passwordicon} alt="password-img" />
          <input
            type="password"
            placeholder="Enter newpassword"
            value={newpassword}
            onChange={(e) => setNewpassword(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <img src={forgotpasswordicon} alt="password-img" />
          <input
            type="password"
            placeholder="Enter confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            required
          />
        </div>
        <div className="submit-container">
          <button
            className="submit"
            onClick={(e) => {
              handleUpdatepassword(e);
              navigate("/login");
            }}
          >
            Submit
          </button>
        </div>
      </div>
      </div>
     
      
  )

  
};

export default UpdatePassword;