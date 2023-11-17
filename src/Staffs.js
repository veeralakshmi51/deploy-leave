import axios from "axios";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./App.css";
//import dp1 from "./img/dp1.png";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";
import  {AiFillBell} from 'react-icons/ai'
//import {RiAdminFill} from 'react-icons/ri'

function Staffs() {
  const [lists, setLists] = useState([]);
  const [sortedLists, setSortedLists] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [dateofjoining, setDateOfJoining] = useState("");
  const [email, setEmail] = useState("");
  const [usertype, setUsertype] = useState("Staff");
  //const [address, setAddress] = useState('');
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [postPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [casualleave, setCasualleave] = useState(12);
  const [medicalleave, setMedicalleave] = useState(7);
  const [menstrualleave, setMenstrualleave] = useState(12);
 const [currentDate]=useState(new Date());
 const [message, setMessage] = useState('');
  const [details, setDetails] = useState('');
 
 const handleDobChange=(e)=>{
  setDob(e.target.value);
 } 
 
 const handleChange = (e) => {
  setUsername(e.target.value);
  if (e.target.value === '') {
    setDetails('Username is required');
  } else if (e.target.value.length < 8) {
    setDetails('Username must contain 8 characters');
  } else {
    setDetails('');
  }
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (e.target.value === '') {
    setMessage('Please Enter Password');
  } else if (!regExp.test(e.target.value)) {
    setMessage('Password is not valid');
  } else {
    setMessage('password is valid');
  }
};
  // useEffect(() => {
  //   try {
  //     const currentDate = new Date();
  //     const dojDate = new Date(dateofjoining);
  //     const monthDiff =
  //       (currentDate.getFullYear() - dojDate.getFullYear()) * 12 +
  //       (currentDate.getMonth() - dojDate.getMonth());
  //       const newCasualLeave=(casualleave-monthDiff)+1;
  //       const newMedicalLeave=(medicalleave-monthDiff)+1;
  //       const newMenstrualLeave=gender=== "female" ?(12-monthDiff)+1:0;
  //       setCasualleave(newCasualLeave);
  //       setMedicalleave(newMedicalLeave);
  //       setMenstrualleave(newMenstrualLeave);
  //   }
  //   catch (error) {
  //     alert(error.response.data.error);
  //   }
  // },[dateofjoining,gender]);
useEffect(()=>{
  if(dob){
    const birthDate=new Date(dob);
    const ageDiff=currentDate.getFullYear()-birthDate.getFullYear()
    setAge(ageDiff);
  }
  else{
    setAge("");
  }
},[dob,currentDate])
  useEffect(() => {
    const getAPI = async () => {
      try {
        const result = await axios.get(
          "https://elonleavemanagement.onrender.com/staff/get_all"
        ); //get all staff details
        const data = result.data.data;
        setLists(data);
        setSortedLists([...data].sort((a, b) => a.Name?.localeCompare(b.Name)));
        setLoading(false);
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

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://elonleavemanagement.onrender.com/staff/register",
        {
           username: username,
          Age: age,
          email: email,
          Name: name,
          Gender: gender,
          DOB: dob,
          Contact: contact,
          password: password,
          usertype: usertype,
          Dateofjoining: dateofjoining,
          Casualleaves: casualleave,
          Medicalleaves: medicalleave,
          Menstrualleaves: menstrualleave,
          
        }
      );
      console.log(result);
      window.location.reload();
    } catch (e) {
      alert("Please Provide Correct Details");
      console.log(e);
    }
  };

  const handleClose = () => {
    window.location.reload();
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const paginatedLists = sortedLists.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <title>Admin Login </title>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar>
            <Menu className="sidebar">
              {/* <img src={dp1} width={200} height={150} /> */}
              <SubMenu label="Admin ">
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
            <div></div>
            <br></br>
            <br></br>
            <div>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#leavemanagement`}
              >
                Create New Staff <MdCreateNewFolder />
              </button>
              <br></br>
              <br></br>
              <div
                className="modal fade"
                id={`leavemanagement`}
                tabIndex="-1"
                aria-labelledby="examplemodalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2 className="modal-title fs-5" id="exampleModal">
                        Add Staff Details
                      </h2>
                      <button
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          value={username}
                          onChange={handleChange}
                        />
                        <label htmlFor="username"> User Name <span style={{color:'red'}}>*</span> </label><p>{details}</p>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                        <label htmlFor="name"> Name <span style={{color:'red'}}>*</span></label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingInput"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        <label htmlFor="password"> Password <span style={{color:'red'}}>*</span></label>
                        <p>{message}</p>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          value={usertype}
                          // onChange={(e) => setUsertype(e.target.value)}
                          readOnly
                        />
                        <label className="floatingInput"> UserType </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control"
                          id="floatingInput"
                          value={dateofjoining}
                          onChange={(e) => setDateOfJoining(e.target.value)}
                        />
                        <label htmlFor="doj"> DOJ <span style={{color:'red'}}>*</span></label>
                      </div>
                      <div className="border border-1 rounded staffsusertype">
                        <label className="col-sm-2 col-form-label staffsusertypelabel">
                          Gender
                          <span style={{color:'red'}}>*</span>
                        </label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="col-sm-4 staffsusertypelabelselect"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control"
                          id="floatingInput"
                          value={dob}
                          onChange={handleDobChange}
                        />
                        <label className="floatingInput"> DOB <span style={{color:'red'}}>*</span> </label>
                      </div>
                      <div className="border border-1 rounded staffsusertype">
                        <label className="col-sm-2 col-form-label staffsusertypelabel">
                          Age
                        </label>
                        <input
                          value={age}
                          // onChange={(e) => setAge(e.target.value)}
                          className="col-sm-4 staffsusertypelabelselect"
                        />
                          {/* <option value="">Select Age</option>
                          <option value="18-25">18-25</option>
                          <option value="25-35">25-35</option>
                          <option value="35-45">35-45</option>
                          <option value="45-55">45-55</option>
                        </select> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="floatingInput"> Email <span style={{color:'red'}}>*</span></label>
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
                        <label className="floatingInput"> Contact <spna style={{color:'red'}}>*</spna></label>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button className="btn btn-primary" onClick={handleAdd}>
                        <MdPersonAddAlt1 />
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleClose}
                      >
                        <IoMdCloseCircle />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <h4 className="addstaff">Add Staff</h4>
           <form className="col-sm-4 border border-3">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"> Name </label>
            <div className="col-sm-10">
                <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> Age </label>
                <div className="col-sm-10">
                <input type='number' name='age' value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Gender</label> 
            <div className="col-sm-10">
                <select>
                <option>Male</option>
                <option>Female</option>
                </select>
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> DOB </label>
                <div className="col-sm-10">
                <input type='date' name='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> Email </label>
                <div className="col-sm-10">
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> Department </label>
                <div className="col-sm-10">
                <input type='text' name='department' value={department} onChange={(e) => setDepartment(e.target.value)} />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> Address </label>
                <div className="col-sm-10">
                <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> Contact </label>
                <div className="col-sm-10">
                <input type='text' name='contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label"> Password </label>
                <div className="col-sm-10">
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
          </form> */}
              <div>
                <div>
                  <table className="table table-striped table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">USER NAME</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DOJ</th>
                        <th scope="col">AGE</th>
                        <th scope="col">DOB</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">EMAIL</th>
                        {/* <th scope="col">Address</th> */}
                        <th scope="col">CONTACT</th>
                        <th scope="col">CL</th>
                        <th scope="col">ML</th>
                        <th scope="col">MENSTRUAL LEAVE</th>
                        

                      </tr>
                    </thead>
                    <tbody>
                      {paginatedLists.map((current) => (
                        <tr key={current._id}>
                          <td>{current.username}</td>
                          <td>{current.Name}</td>
                          <td>{current.Dateofjoining}</td>
                          <td>{current.Age}</td>
                          <td>{current.DOB}</td>
                          <td>{current.Gender}</td>
                          <td>{current.email}</td>
                          <td>{current.Contact}</td>
                          <td>{current.Casualleaves}</td>
                          <td>{current.Medicalleaves}</td>
                          <td>{current.Menstrualleaves}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
      </div>
    </>
  );
}

export default Staffs;
