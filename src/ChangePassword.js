import axios from 'axios';
import React, { useState} from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link,useNavigate  } from "react-router-dom";
import './App.css';
//import dp1 from './img/dp1.png';
//import {HiOutlineSave} from 'react-icons/hi'
import {MdDataSaverOn} from 'react-icons/md'

const ChangePassword = () => {
  const [username, setUsername] = useState(localStorage.getItem('Username'));
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate=useNavigate()
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

  const handleSave = async e => {
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
        navigate('/stafflogin')
        // getAPI();
      } else {
        alert('Newpassword and Confirmpassword are not matched');
        console.log(username);
        console.log(newpassword);
      }
    } catch (error) {
      alert(error);
    }
    // alert(username)
  };

  return (
    <>
      <title>Staff Login </title>
      <div className="container-fluid">
        <div className="row flex-nowrap">
        <Sidebar>
          <Menu className="sidebar">
          {/* <img src={dp1} width={200} height={150} /> */}
          <h5 className="welcome"> Welcome {localStorage.getItem("Name")}</h5>
          {/* <MenuItem component={<Link to='/message' />}>Message</MenuItem> */}
          <SubMenu label="Details">
            <MenuItem className="sidebarsubmenu" component={<Link to="/editstaffdetails" />}>Edit Staff Details</MenuItem>
            <MenuItem className="sidebarsubmenu" component={<Link to="/changepassword" />}>Change Password</MenuItem>
          </SubMenu>
          <SubMenu label="Leave">
            <MenuItem className="sidebarsubmenu" component={<Link to="/leaveapply" />}>Leave Apply</MenuItem>
            {/* <MenuItem className="sidebarsubmenu" component={<Link to="/leavestatus" />}>Leave Status</MenuItem> */}
            <MenuItem className="sidebarsubmenu" component={<Link to="/leaves" />}>Leaves</MenuItem>
            <MenuItem className="sidebarsubmenu" component={<Link to="/leavesreport" />}>Leave Report</MenuItem>
          </SubMenu>
         
          <MenuItem component={<Link to='/stafflogout' />}>Logout</MenuItem>
          </Menu>
          </Sidebar>
          <div className="col py-3">
          <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Change Password</h1>
          </div>
          <br>
          </br>
            <div className="row changepasswordh">
              
              <form className="staffleaveapply border border-3 changepassword" >
                <div className="form-group row leaveapplyname">
                  <label className="col-sm-3 col-form-label">UserName</label>
                  <div className="col">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      // onChange={e => setUsername(e.target.value)}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row leaveapplyname">
                  <label className="col-sm-3 col-form-label">NewPassword</label>
                  <div className="col">
                    <input
                      type="password"
                      name="newpassword"
                      value={newpassword}
                      onChange={e => setNewpassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row leaveapplyname">
                  <label className="col-sm-3 col-form-label">
                    ConfirmPassword
                  </label>
                  <div className="col">
                    <input
                      type="password"
                      name="confirmpassword"
                      value={confirmpassword}
                      onChange={e => setConfirmpassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="leaveapplybtn">
                  <button className="btn btn-primary changepwdbtn" onClick={handleSave}>
                    Save <MdDataSaverOn/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;