import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import './App.css';
//import bg from './img/bg.png';
import {AiFillBell} from 'react-icons/ai'

const Logout = () => {

    const navigate = useNavigate(); 
    const handleLogout = e => {
    e.preventDefault()
    localStorage.removeItem('AuthID')
    navigate('/')
    }

    const handleNo = e => {
        e.preventDefault()
        navigate('/admin')
    }

    return (
        <>     
         <title>Admin Login </title>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                <Sidebar>
  <Menu className="sidebar">
  {/* <img src={bg} width={200} height={150} /> */}
  <SubMenu label="Admin">
  <MenuItem className="sidebarsubmenu" component={<Link to="/staffs" />}>Add New Staff</MenuItem>
  </SubMenu>
  <SubMenu label="Leaves">
    <MenuItem className="sidebarsubmenu" component={<Link to="/leaverequest" />}>Leave Requests</MenuItem>
  </SubMenu>
    <SubMenu label="Report">
      <MenuItem className="sidebarsubmenu" component={<Link to="/staffdetails" />}> Staff Details </MenuItem>
      <MenuItem className="sidebarsubmenu" component={<Link to="/staffleaves" />}> Staff Leaves </MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/notification" />}> Notification<AiFillBell/></MenuItem>
    <MenuItem component={<Link to="/logout" />}> Logout </MenuItem>
  </Menu>
</Sidebar>
                <div className="col py-3">
                <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Logout Panel</h1>
          </div>
                <div className="logouth4">
                  
                </div>
                <br></br><br></br>
                <div className="logout border border-3">
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

export default Logout
