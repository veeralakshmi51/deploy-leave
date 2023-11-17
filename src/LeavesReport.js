import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './App.css';
import Notification from "./Notification";


const LeavesReport = () => {
  const [lists, setLists] = useState([]);
  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
const [username,setUsername]=useState("")
const [notification, setNotification] = useState([]);
//const [data,setData]=useState([])
const addNotification = (message) => {
  setNotification([...notification, message]);
};

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(lists.length/postPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = lists.slice(indexOfFirstPost, indexOfLastPost);
  //const storedUsername=localStorage.getItem("username");
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // useEffect(()=>{
  //   axios.get(`https://elonleavemanagement.onrender.com/staff/leave/username/${username}`)
  //   .then(res=>setLists(res.data))
  //   .catch(err=>console.log(err));
  // },[])
  const getAPI = async () => {
    const username = localStorage.getItem("Username");
    try {
      const result = await axios.get(`https://elonleavemanagement.onrender.com/staff/leave/username/${username}`);
      console.log(username);
      if (result.data.data) {
        setLists(result.data.data.reverse());
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    // setUsername(storedUsername);
    // if(storedUsername){
    getAPI();
    // }
  }, []);
  useEffect(()=>{
    try{
      //alert("Data added successfully!")
    }
    catch(error){
      addNotification("Error loading data...")
    }
  },[])

  return (
    <>
      <title>Staff Login </title>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar>
            <Menu className="sidebar">
              <h5 className="welcome"> Welcome {localStorage.getItem("Name")}</h5>
              <SubMenu label="Details">
                <MenuItem className="sidebarsubmenu" component={<Link to="/editstaffdetails" />}>Edit Details</MenuItem>
                <MenuItem className="sidebarsubmenu" component={<Link to="/changepassword" />}>Change Password</MenuItem>
              </SubMenu>
              <SubMenu label="Leave">
                <MenuItem className="sidebarsubmenu" component={<Link to="/leaveapply" />}>Leave Apply</MenuItem>
                <MenuItem className="sidebarsubmenu" component={<Link to="/leaves" />}>Leaves</MenuItem>
              </SubMenu>
              <MenuItem className="sidebarsubmenu" component={<Link to="/leavesreport" />}>Leave Report</MenuItem>
              <MenuItem component={<Link to='/stafflogout' />}>Logout</MenuItem>
            </Menu>
          </Sidebar>
          <div className="col py-3">
            <div className="p-1 d-flex justify-content-center border">
              <h2>Leave Report</h2>
            </div>
            <div className="row">
              <div className="col">
                <br></br>
                <br></br>
                <table className="table table-striped border border-3">
                  <thead>
                    <tr>
                      <th scope="col">Staff Name</th>
                      <th scope="col">Leave Type</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Commands</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lists && currentPosts.map((current) => (
                      <tr key={current._id}>
                        <td>{current.Name}</td>
                        <td>{current.Leavetype}</td>
                        <td>{current.StartDate && current.StartDate.slice(0, 10)}</td>
                        <td>{current.EndDate && current.EndDate.slice(0, 10)}</td>
                        <td>{current.Status}</td>
                        <td>{current.Command}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav>
                <ul className='pagination justify-content-center'>
                  {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                      <button onClick={() => paginate(number)} className='page-link paginationbtn'>{number}</button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="notifications-container">
        {notification.map((notifications, index) => (
          <Notification key={index} message={notifications} />
        ))}
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeavesReport;
