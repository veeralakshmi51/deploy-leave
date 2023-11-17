import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

const Leaves = () => {
  const [leaveBalances, setLeaveBalances] = useState({
    Casualleaves: 0,
    Medicalleaves: 0,
    Menstrualleaves: 0,
  });
  const [username, setUsername] = useState("Username"); 

  useEffect(() => {
    
    setUsername(localStorage.getItem("Username"));

    const fetchLeaveBalances = async () => {
      try {
        const response = await axios.get(
          `https://elonleavemanagement.onrender.com/staff/balanceleaves/${username}`
        );
        if (response.data.message === "Balance leaves retrieved successfully") {
          setLeaveBalances(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching leave balances:", error);
      }
    };

    
    if (username) {
      fetchLeaveBalances();
    }
  }, [username]);

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar>
            <Menu className="sidebar">
              <h5 className="welcome">
                {" "}
                Welcome {localStorage.getItem("Name")}
              </h5>
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
              <SubMenu label="Leave Details">
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/leaveapply" />}
                >
                  Leave Apply
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
              <h1 className="lmsheaderh1">Leave Details</h1>
            </div>
            <br></br>
            <br></br>
            <table className="table table-stripped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Leaves</th>
                  <th scope="col">Balance Leave </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Casual Leave</td>
                  <td>{leaveBalances.Casualleaves}</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>{leaveBalances.Medicalleaves}</td>
                </tr>
                <tr>
                  <td>Menstrual Leave</td>
                  <td>{leaveBalances.Menstrualleaves}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaves;
