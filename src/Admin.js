import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './App.css';
import backImage from './img/14.png'
import {AiFillBell} from 'react-icons/ai'
function Admin() {

  // const navigate = useNavigate(); 
  //   const hanleLogout = e => {
  //   e.preventDefault()
  //   localStorage.removeItem('AuthID')
  //   console.log('Logged Out')
  //   navigate('/login')
  //   }

  return (
    <>
      <title>Admin Login </title>
      <div className="container-fluid">
        <div className="row flex-nowrap">
        {/* <div className="logo" style={{
            width: '200px',
            height: '200px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${bg})`
          }}> */}
        {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 vh-100 admin">
        <img src={bg} width={220} height={150} />
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white" >
        <Link to="*" className="d-flex align-items-center -pb-3 mb-md-3 me-md-auto adminlist text-decoration-none">
        <span className="fs-5 fw-bolder d-none d-sm-inline">Admin Login</span>
        </Link>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itms-sm-start adminlist">
          <li>
            <div>
            <Link to="staffs" className="nav-link px-0 align-middle adminlistitem">
              <span className="ms-
              1 d-none d-sm-inline">Staff</span>
              <i className="bi-chevron-down toggle-btn"></i>
              </Link></div>
          </li>
          <li>
            <Link to="leave" className="nav-link px-0 align-middle adminlistitem">
            <span className="ms-1 d-none d-sm-inline">Leave</span>
            <i class="bi bi-arrow-down text-white"></i>
            </Link>
          </li>
          <li>
            <Link to="report" className="nav-link px-0 align-middle adminlistitem">
              <span className="ms-1 d-none d-sm-inline">Report</span>
              <i className="bi bi-arrow-down"></i>
              </Link>
              <ul className="nav collapse ms-1">
                <li className="nav-item">
                  <a href="" className="nav-link">Leave Requests</a>
                </li>
              </ul>
          </li>
          <li>
            <Link to="sendmessage" className="nav-link px-0 align-middle adminlistitem">
              <span className="ms-1 d-none d-sm-inline">Send Message</span></Link>
          </li>
          <li>
            <Link to="logout" className="nav-link px-0 align-middle adminlistitem">
              <span className="ms-1 d-none d-sm-inline">Logout</span></Link>
          </li>
        </ul>
        </div>
        </div> */}

<Sidebar>
  <Menu className="sidebar">
  <SubMenu label="Admin">
  <MenuItem className="sidebarsubmenu" component={<Link to="/staffs" />}>Add New Staff</MenuItem>
  </SubMenu>
  <SubMenu label="Leaves">
    <MenuItem className="sidebarsubmenu" component={<Link to="/leaverequest" />}>Leave Requests</MenuItem>
  </SubMenu>
    <SubMenu label="Dashboard">
      <MenuItem className="sidebarsubmenu" component={<Link to="/staffdetails" />}> Staff Details </MenuItem>
      <MenuItem className="sidebarsubmenu" component={<Link to="/staffleaves" />}> Staff Leaves </MenuItem>
    </SubMenu>
    {/* <MenuItem component={<Link to="/sendmessage" />}> Send Message </MenuItem> */}
    <MenuItem component={<Link to="/notification" />}> Notification <AiFillBell/></MenuItem>
    <MenuItem component={<Link to="/logout" />}> Logout </MenuItem>

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

export default Admin;
