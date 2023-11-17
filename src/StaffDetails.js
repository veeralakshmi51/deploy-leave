import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./App.css";
//import dp1 from "./img/dp1.png";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsSave2Fill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import {AiFillBell} from 'react-icons/ai'

const StaffDetails = () => {
  const [lists, setLists] = useState([]);
  const [sortedLists, setSortedLists] = useState([]);
  //const [staffid, setStaffid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  //const [department, setDepartment] = useState("");
  //const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [pageNumbers, setPageNumbers] = useState([]);

  const [postPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getAPI = async () => {
      try {
        const result = await axios.get(
          `https://elonleavemanagement.onrender.com/staff/get_all`
        );
        const data = result.data.data;
        setLists(data);
        setSortedLists([...data].sort((a, b) => a.Name?.localeCompare(b.Name)));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getAPI();
  }, []);
  useEffect(() => {
    const newPageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedLists.length / postPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [sortedLists, postPerPage]);

  const handleEdit = async (username) => {
    try {
      const result = await axios.put(
        `https://elonleavemanagement.onrender.com/staff/detail/${username}`,
        {
          // staffid,name,age,gender,department,dob,email,address,contact
          Name: name,
          Age: age,
          Gender: gender,
          DOB: dob,
          email: email,
          Contact: contact,
          password: password,
        }
      );
      console.log(result);
      console.log(username);
      window.location.reload();
      //getAPI();
    } catch (error) {
      alert(error);
      console.log(name);
    }
  };

  const handleClose = async () => {
    window.location.reload();
  };

  const handleDelete = async (username) => {
    const conform = window.confirm("Are you sure to delete?");
    if (conform) {
      const result = await axios.delete(
        `https://elonleavemanagement.onrender.com/staff/detail/${username}`
      );
      console.log(result);
      window.location.reload();
      // getAPI();
    } else alert("cancelled");
  };
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const paginatedLists = sortedLists?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar>
            <Menu className="sidebar">
              {/* <img src={dp1} width={200} height={150} /> */}
              <SubMenu label="Admin">
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/staffs" />}
                >
                  Add New Staff
                </MenuItem>
              </SubMenu>
              <SubMenu label="Leaves">
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/leaverequest" />}
                >
                  Leave Requests
                </MenuItem>
              </SubMenu>
              <SubMenu label="Report">
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/staffdetails" />}
                >
                  {" "}
                  Staff Details{" "}
                </MenuItem>
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/staffleaves" />}
                >
                  {" "}
                  Staff Leaves{" "}
                </MenuItem>
              </SubMenu>
              <MenuItem component={<Link to="/notification" />}> Notification <AiFillBell/> </MenuItem>
              {/* <MenuItem component={<Link to="/sendmessage" />}> Send Message </MenuItem> */}
              <MenuItem component={<Link to="/logout" />}> Logout </MenuItem>
            </Menu>
          </Sidebar>
          <div className="col py-3">
            <div className="p-1 d-flex justify-content-center border lmsheader">
              <h1 className="lmsheaderh1">Staff Details</h1>
            </div>
            <br></br>
            <br></br>
            <div>
              <table className="table table-striped table table-bordered">
                <thead>
                  <tr>
                    {/* <th scope='col'>StaffID</th> */}
                    <th scope="col">NAME</th>
                    {/* <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Department</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th> */}
                    <th scope="col">CONTACT</th>
                    <th scope="col">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLists?.map((current) => (
                    // <tr key={current.staffid}>
                    //   <td>{current.staffid}</td>
                    <tr key={current._id}>
                      <td>{current.Name}</td>
                      {/* <td>{current.age}</td>
                      <td>{current.gender}</td>
                      <td>{current.department}</td>
                      <td>{current.dob}</td>
                      <td>{current.email}</td>
                      <td>{current.address}</td> */}
                      <td>{current.Contact}</td>
                      <td>
                        <button
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target={`#leavemanagement${current._id}`}
                          onClick={() => {
                            // setStaffid(current.staffid)
                            setName(current.Name);
                            setPassword(current.password);
                            setGender(current.Gender);
                            // setDepartment(current.department)
                            setDob(current.DOB);
                            setAge(current.Age);
                            setEmail(current.email);
                            // setAddress(current.address)
                            setContact(current.Contact);
                          }}
                        >
                          <BiSolidEdit />
                        </button>
                        <div
                          className="modal fade"
                          id={`leavemanagement${current._id}`}
                          tabIndex="-1"
                          aria-labelledby="examplemodalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h2
                                  className="modal-title fs-5"
                                  id="exampleModal"
                                >
                                  Edit Staff Details
                                </h2>
                                <button
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                {/* <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={staffid} onChange={(e) => setStaffid(e.target.value)} />
                                <label className='floatingInput'> Staff ID </label>
                            </div> */}
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                  <label className="floatingInput">
                                    {" "}
                                    Name{" "}
                                  </label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="floatingInput"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                  <label className="floatingInput">
                                    {" "}
                                    Password{" "}
                                  </label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                  />
                                  <label className="floatingInput">
                                    {" "}
                                    Gender{" "}
                                  </label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                  />
                                  <label className="floatingInput"> DOB </label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                  />
                                  <label className="floatingInput"> Age </label>
                                </div>

                                {/* <div className="form-floating mb-3">
                              <input type='text'className='form-control' id='floatingInput'value={department} onChange={(e) => setDepartment(e.target.value)} />
                                <label className='floatingInput'> Department </label>
                            </div> */}

                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label className="floatingInput">
                                    {" "}
                                    Email{" "}
                                  </label>
                                </div>
                                {/* <div className="form-floating mb-3">
                              <input type='text'className='form-control' id='floatingInput'value={address} onChange={(e) => setAddress(e.target.value)} />
                                <label className='floatingInput'> Address </label>
                            </div> */}
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                  />
                                  <label className="floatingInput">
                                    {" "}
                                    Contact{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  className="btn btn-primary"
                                  onClick={() => handleEdit(current.username)}
                                >
                                  Save <BsSave2Fill />
                                </button>
                                <button
                                  className="btn btn-secondary"
                                  onClick={handleClose}
                                >
                                  Close <IoIosCloseCircle />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(current.username)}
                        >
                          <RiDeleteBin5Fill />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav>
              <ul className="pagination justify-content-center">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item">
                    <button
                      onClick={() => paginate(number)}
                      className="page-link paginationbtn"
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDetails;
