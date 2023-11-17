import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import './App.css';
//import dp1 from './img/dp1.png';

const Stafflogout = () => {

    const navigate = useNavigate(); 
    const handleLogout = e => {
    e.preventDefault()
    localStorage.removeItem('AuthID')
    navigate('/')
    }

    const handleNo = e => {
        e.preventDefault()
        navigate('/stafflogin')
    }

  return (
    <>
      <title>Admin Login </title>
            <div className="container-fluid">
                <div className=" flex-nowrap">
                <Sidebar>
          <Menu className="sidebar">
          {/* <img src={dp1} width={200} height={150} /> */}
          <h5 className="welcome"> Welcome {localStorage.getItem("Name")}</h5>
          {/* <MenuItem component={<Link to='/message' />}>Message</MenuItem> */}
          <SubMenu label="Details">
            <MenuItem className="sidebarsubmenu" component={<Link to="/editstaffdetails" />}>Edit Details</MenuItem>
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
                <div className=" py-3">
                <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Logout Panel</h1>
          </div>
                <br></br><br></br>
                <div className="logouth4">
                    
                </div>
                <div className="stafflogout border border-3">
                    <h5 className="logoutp"> Do You want to Logout </h5>
                    <button onClick={handleLogout} className="col btn btn-primary logoutyes">Yes</button>
                    <button onClick={handleNo} className="col btn btn-primary logoutno">No</button>
                </div>
                </div>
                </div>
            </div>
    </>
  )
}

export default Stafflogout
