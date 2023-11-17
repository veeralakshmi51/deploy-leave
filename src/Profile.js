import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './App.css';
import bg from './img/bg.png';

const Profile = () => {

    const [lists,setLists] = useState([])
    const [sortedLists, setSortedLists] = useState([])
    const [staffid,setStaffid] = useState('')
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [gender,setGender] = useState('')
    const [dob,setDob] = useState('')
    const [email,setEmail] = useState('')
    const [department,setDepartment] = useState('')
    const [address,setAddress] = useState('')
    const [contact,setContact] = useState('')

    const username = localStorage.getItem("Username")
  
    const getAPI = async() => {
        try{
        const result = await axios.get (`https://elonleavemanagement.onrender.com/Staff/${username}`)//
        console.log(result.data)
        setLists(result.data.data)
    }catch(error){
        console.log(error)
      }
    }

    useEffect(() => {
        getAPI()
      },[]);
  
  return (
    <>
    <title>Staff Login </title>
    <div className="container-fluid">
    <div className="row flex-nowrap">
    <Sidebar>
          <Menu className="sidebar">
          <img src={bg} width={200} height={150} />
          <MenuItem className="sidebarsubmenu"> Welcome {localStorage.getItem("Name")}</MenuItem>
          {/* <MenuItem component={<Link to='/message' />}>Message</MenuItem> */}
          <SubMenu label="Details">
            <MenuItem className="sidebarsubmenu" component={<Link to="/editstaffdetails" />}>Edit Details</MenuItem>
            <MenuItem className="sidebarsubmenu" component={<Link to="/changepassword" />}>Change Password</MenuItem>
          </SubMenu>
          <SubMenu label="Leave">
            <MenuItem className="sidebarsubmenu" component={<Link to="/leaveapply" />}>Leave Apply</MenuItem>
            {/* <MenuItem className="sidebarsubmenu" component={<Link to="/leavestatus" />}>Leave Status</MenuItem> */}
            <MenuItem className="sidebarsubmenu" component={<Link to="/leaves" />}>Leaves</MenuItem>
          </SubMenu>
          <MenuItem className="sidebarsubmenu" component={<Link to="/leavesreport" />}>Leave Report</MenuItem>
          <MenuItem component={<Link to='/stafflogout' />}>Logout</MenuItem>
          </Menu>
        </Sidebar>
        <div className="col py-3">
          <div className="p-1 d-flex justify-content-center border lmsheader">
            <h2 className="lmsheaderh2">Leave Management System</h2>
          </div>
          <div className='leaveapply'>
        <h4>Your Details</h4>
        <div className='border border-3 profile'>
        {/* <div className='form-group row leaveapplyname'>
            <label className="col-sm-2 col-form-label"> Name: {lists.Name} </label> */}
            {/* <div className='col-sm-10'>
            {lists.Name}
            </div> 
            </div> */}
            <div className='profilep'>
            <p>Username: &nbsp; &nbsp; &nbsp;{lists.username}</p>
            <p> Name: &nbsp; &nbsp; &nbsp;{lists.Name} </p>
            <p> Age: &nbsp; &nbsp; &nbsp;{lists.Age}</p>
            <p> Gender: &nbsp; &nbsp; &nbsp;{lists.Gender}</p>
            <p> Date Of Birth: &nbsp; &nbsp; &nbsp;{lists.DOB}</p>
            <p> Email: &nbsp; &nbsp; &nbsp;{lists.email}</p>
            <p> Contact: &nbsp; &nbsp; &nbsp;{lists.Contact}</p>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Profile
