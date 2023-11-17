import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './App.css';
import {AiFillBell} from 'react-icons/ai'
//import dp1 from './img/dp1.png';
import backImage from './img/14.png'

function Stafflogin() {
  return (
    <>
      <title>Staff Login </title>
      <div className="container-fluid">
        <div className="row flex-nowrap">
        {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-info vh-100">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white" >
        <Link to="/" className="d-flex align-items-center pb-3 mb-md-3 me-md-auto text-white text-decoration-none">
        <span className="fs-5 fw-bolder d-none d-sm-inline">Staff Login</span>
        </Link>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itms-sm-start">
          <li>
            <Link to="message" className="nav-link text-white px-0 align-middle">
              <span className="ms-1 d-none d-sm-inline">Message</span>
              </Link>
          </li>
          <li>
            <Link to="leave" className="nav-link text-white px-0 align-middle">
            <span className="ms-1 d-none d-sm-inline">Leave</span></Link>
          </li>
          <li>
            <Link to="report" className="nav-link text-white px-0 align-middle">
              <span className="ms-1 d-none d-sm-inline">Report</span></Link>
          </li>
          <li>
            <Link to="password" className="nav-link text-white px-0 align-middle">
              <span className="ms-1 d-none d-sm-inline">Password</span></Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white px-0 align-middle">
              <span className="ms-1 d-none d-sm-inline">Logout</span></a>
          </li>
        </ul>
        </div>
        </div> */}

        <Sidebar>
          <Menu className="sidebar">
          {/* <img src={dp1} width={250} height={200} /> */}
          <h5 className="welcome"> Welcome {localStorage.getItem("Name")}</h5>
          {/* <MenuItem component={<Link to='/message' />}>Message</MenuItem> */}
          <SubMenu label="Details">
            <MenuItem className="sidebarsubmenu" component={<Link to="/editstaffdetails" />}>Edit Staff Details</MenuItem>
            <MenuItem className="sidebarsubmenu" component={<Link to="/changepassword" />}>Change Password</MenuItem>
          </SubMenu>
          <SubMenu label="Leave Details">
            <MenuItem className="sidebarsubmenu" component={<Link to="/leaveapply" />}>Leave Apply</MenuItem>
            {/* <MenuItem className="sidebarsubmenu" component={<Link to="/leavestatus" />}>Leave Status</MenuItem> */}
            <MenuItem className="sidebarsubmenu" component={<Link to="/leaves" />}>Leaves</MenuItem>
            <MenuItem className="sidebarsubmenu" component={<Link to="/leavesreport" />}>Leave Report</MenuItem>
          </SubMenu>
          <MenuItem component={<Link to='/notification' />}>Notification     <AiFillBell/></MenuItem>
          <MenuItem component={<Link to='/stafflogout' />}>Logout</MenuItem>
          
          
          </Menu>
        </Sidebar>
        <div className="col py-3">
          <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Staff Leave Management System</h1>
          </div>
          <div className="backImage justify-content-center ">
            <img src={backImage} width={1500} height={700}  alt=""></img>
          </div>
          </div>
        </div>
      </div>
    </>
     );
}

export default Stafflogin;
