import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link,  useNavigate } from "react-router-dom";
import './App.css';
//import dp1 from './img/dp1.png';
import {HiOutlineSave} from 'react-icons/hi'

const EditStaffDetails = () => {
  const [lists,setLists] = useState([])
 // const [sortedLists, setSortedLists] = useState([])
 // const [staffid,setStaffid] = useState('')
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [gender,setGender] = useState('')
  const [dob,setDob] = useState('')
  const [email,setEmail] = useState('')
  //const [department,setDepartment] = useState('')
  //const [address,setAddress] = useState('')
  const [contact,setContact] = useState('')
  const navigate=useNavigate()

  const getAPI = async() => {
    try{
    const result = await axios.get (`https://elonleavemanagement.onrender.com/staff/detail/${username}`)
    console.log(result.data)
    setLists(result.data.data)
    setName(result.data.data.Name)
    setAge(result.data.data.Age)
    setGender(result.data.data.Gender)
    setDob(result.data.data.DOB)
    setEmail(result.data.data.email)
    setContact(result.data.data.Contact)
  //   setSortedLists( [...lists].sort((a, b) => a.Name?.localeCompare(b.Name)))
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getAPI()
  },[]);

  const username = localStorage.getItem("Username")
  
  const handleEdit = async () => {
    try{
      const result= await axios.put(`https://elonleavemanagement.onrender.com/staff/detail/${username}`,{
        // staffid,name,age,gender,department,dob,email,address,contact
      Name: name,
      Age: age,
      Gender: gender,
      DOB: dob,
      email: email,
      Contact: contact,
      })
      console.log(result)
      alert("Your details are changed")
      // window.location.reload();//refresh
      navigate('/stafflogin')
    }
    catch (error){
      alert(error)
      console.log(name)
    }
  }
 
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
        <div className="col py-3">
        <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Change Your Details</h1>
          </div>
    <br></br>
    <div className="editdetails">
      
      <div className='border border-3 editdetailsborder'>
      <div className="form-floating mb-3 editdetailsname">
        <input type='text'className='form-control' id='floatingInput'value={name} onChange={(e) => setName(e.target.value)} />
         <label className='floatingInput'> Name </label>
        </div>
        <div className="form-floating mb-3 editdetailsname">
        <input type='text'className='form-control' id='floatingInput'value={age} onChange={(e) => setAge(e.target.value)} />
        <label className='floatingInput'> Age </label>
        </div>
        <div className="form-floating mb-3 editdetailsname">
        <input type='text'className='form-control' id='floatingInput'value={gender} onChange={(e) => setGender(e.target.value)} />
        <label className='floatingInput'> Gender </label>
        </div>
        <div className="form-floating mb-3 editdetailsname">
        <input type='text'className='form-control' id='floatingInput'value={dob} onChange={(e) => setDob(e.target.value)} />
        <label className='floatingInput'> DOB </label>
        </div>
        <div className="form-floating mb-3 editdetailsname">
        <input type='text'className='form-control' id='floatingInput'value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className='floatingInput'> Email </label>
        </div>
        <div className="form-floating mb-3 editdetailsname">
        <input type='text'className='form-control' id='floatingInput'value={contact} onChange={(e) => setContact(e.target.value)} />
        <label className='floatingInput'> Contact </label>
        </div>
        <div>
        <button className='btn btn-primary editdetailsbtn' onClick={handleEdit}> Save Changes  <HiOutlineSave/></button>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditStaffDetails
