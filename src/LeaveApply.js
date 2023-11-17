import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./App.css";
//import dp1 from "./img/dp1.png";
import Notification from "./Notification";


const LeaveApply = () => {
  const [staffName, setStaffName] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [startdate, setStartdate] = useState("");
  const [selectstart, setSelectstart] = useState("");
  const [enddate, setEnddate] = useState("");
  const [selectend, setSelectend] = useState("");
  const [reason, setReason] = useState("");
  const [username, setUsername] = useState("");
  const [numberofdays, setNumberofdays] = useState(0);
  const [gender,setGender]=useState("");
  //const [notification,setNotification]=useState([]);
  //const [request,setRequest]=useState(0)
  useEffect(() => {
    setStaffName(localStorage.getItem("Name"));
    setUsername(localStorage.getItem("Username"));

  }, []);
// const addNotification=(message)=>{
//   setNotification([...notification,message]);
// }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://elonleavemanagement.onrender.com/staff/leave/apply",
        {
          Name: staffName,
          username: username,
          Gender:gender,
          Leavetype: leaveType,
          StartDate: startdate,
          EndDate: enddate,
          Numberofdays: numberofdays,
          Reason: reason,
        }
      );
      
      console.log(leaveType)
      console.log("Server response:", res.data.data);
      if (res.data.message === "New staff leaverequest") {
        console.log(res.data);
        window.location.reload();
        alert("Leave Request has been sent");
        //setRequest(request+1);
      }
    } catch (error) {
      console.log("Error from the server:", error.response.data.error);
      alert("You don't have enough day to take leave");
    }
  };
  const daysCount=(startdate,enddate)=>{
const start=new Date(startdate);
const end=new Date(enddate);
if(start.toDateString()===end.toDateString()){
  return 1;
}else{
const timeDiff=Math.abs(end-start);
const dayCount=Math.ceil(timeDiff/(1000*60*60*24))
return dayCount+1;
  };
}
useEffect(()=>{
 setNumberofdays( daysCount(startdate,enddate))
},[startdate,enddate])
 
return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar>
          <Menu className="sidebar">
            {/* <img src={dp1} width={200} height={150} /> */}
            <h5 className="welcome"> Welcome {localStorage.getItem("Name")}</h5>
            <SubMenu label="Details">
              <MenuItem
                className="sidebarsubmenu"
                component={<Link to="/editstaffdetails" />}
              >
                Edit Details
              </MenuItem>
              <MenuItem
                className="sidebarsubmenu"
                component={<Link to="/changepassword" />}
              >
                Change Password
              </MenuItem>
            </SubMenu>
            <SubMenu label="Leave">
              <MenuItem
                className="sidebarsubmenu"
                component={<Link to="/leaveapply" />}
              >
                Leave Apply
              </MenuItem>
              <MenuItem
                className="sidebarsubmenu"
                component={<Link to="/leaves" />}
              >
                Leaves
              </MenuItem>
              <MenuItem
                className="sidebarsubmenu"
                component={<Link to="/leavesreport" />}
              >
                Leave Report
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/stafflogout" />}>Logout</MenuItem>
          </Menu>
        </Sidebar>
        <div className="col py-3">
          <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Leave Apply</h1>
          </div>
          <br />
          <br />
        
          <div className="leaveapply">
            <form className="border border-3 staffleaveapply">
               <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label"> username </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="username"
                    value={username || ''}
                    // onChange={(e)=>setUsername(e.target.value)}
                    readOnly
                  />
                </div>
              </div> 
              <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label"> Name </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="staffName"
                    value={staffName || ''}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                  <select
                    value={gender || ''}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              
                {(gender==="female")?
                (<div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label">LeaveType</label>
                <div className="col-sm-10">
                  <select
                    value={leaveType || ''}
                    onChange={(e) => setLeaveType(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="Casualleaves">Casual Leave</option>
                    <option value="Medicalleaves">Medical Leave</option>
                    <option value="Menstrualleaves">Menstrual Leave</option>
                  </select>
                </div>
              </div>
                ):(
                  <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label">LeaveType</label>
                <div className="col-sm-10">
                  <select
                    value={leaveType || ''}
                    onChange={(e) => setLeaveType(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="Casualleaves">Casual Leave</option>
                    <option value="Medicalleaves">Medical Leave</option>
                  </select>
                </div>
              </div>
                )
              }
              <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label">Start Date </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    name="startdate"
                    value={startdate || ''}
                    onChange={(e) => setStartdate(e.target.value)}
                  />
                  <select
                    value={selectstart}
                    onChange={(e) => setSelectstart(e.target.value)}
                  >
                    <option value="fullday">Full Day</option>
                    <option value="halfday">Half Day</option>
                  </select>
                </div>
              </div>
              <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label">End Date </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    name="enddate"
                    value={enddate || ''}
                    onChange={(e) => setEnddate(e.target.value)}
                  />
                  <select
                    value={selectend || ''}
                    onChange={(e) => setSelectend(e.target.value)}
                  >
                    <option value="fullday">Full Day</option>
                    <option value="halfday">Half Day</option>
                  </select>
                </div>
              </div>
              <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label">
                  {" "}
                  Numberofdays{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="numberofdays"
                    value={numberofdays || ''}
                  readOnly
                  />
                </div>
              </div>
              <div className="form-group row leaveapplyname">
                <label className="col-sm-2 col-form-label"> Reason </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="reason"
                    value={reason || ''}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <button
                  className="btn btn-primary leaveapplybtn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="notification-container">
              <div>
               
              </div>
        {/* {notification.map((message, index) => (
          <Notification key={index} message={message}></Notification>
        ))} */}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveApply;
