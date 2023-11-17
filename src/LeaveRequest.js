import axios from "axios";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './App.css';
//import dp1 from './img/dp1.png';
import {MdPageview} from 'react-icons/md'
import {BsFillSaveFill} from 'react-icons/bs'
import {IoMdCloseCircle} from 'react-icons/io';
import  {AiFillBell} from 'react-icons/ai'

function LeaveRequest() {
    const [lists,setLists] = useState([])
    const [staffName,setStaffName] = useState('')
    // const [staffID,setStaffID] = useState('')
    // const [leaveType,setLeaveType] = useState('')
   //  const [startdate,setStartdate] = useState('')
    // const [selectstart,setSelectstart] = useState('')
    // const [enddate,setEnddate] = useState('')
    // const [selectend,setSelectend] = useState('')
    // const [reason,setReason] = useState('')
    const [command,setCommand] = useState('')
    const [Status,setStatus] = useState()
    //const [numberofdays,setNumberofdays]=useState('');
    //const [gender,setGender]=useState("");
    //const [leaveType,setLeaveType]=useState("");
    const [postPerPage] = useState(6)
    const [currentPage,setCurrentPage] = useState(1)
   // const [username,setUsername]=useState("")
    const pageNumbers = []
    
    for (let i=1; i<= Math.ceil(lists.length/postPerPage); i++){
      pageNumbers.push(i)
    }
    const indexOfLastPost = currentPage * postPerPage
      const indexOfFirstPost = indexOfLastPost - postPerPage
      const currentPosts = lists.slice(indexOfFirstPost, indexOfLastPost)
      const paginate = pageNumber => setCurrentPage(pageNumber)
      
      useEffect(() => {
        getAPI()
      },[]);
    const getAPI = async() => {
      try{
        const result = await axios.get ("https://elonleavemanagement.onrender.com/staff/leave/status/pending")
        console.log(result.data)
        setLists(result.data.data)
        console.log(lists)
      }catch(error){
        console.log(error)
      }
      }
      // const daysCount=(startdate,enddate)=>{
      //   const start=new Date(startdate);
      //   const end=new Date(enddate);
      //   const timeDiff=Math.abs(end-start);
      //   const dayCount=Math.ceil(timeDiff/(1000*60*60*24))
      //   return dayCount;
      //     };
    const handleSave = async(_id) => {
        try{
          if(Status){
            const result = await axios.put(`https://elonleavemanagement.onrender.com/staff/leave/reply/${_id}`,{
                // Numberofdays:numberofdays,
                Command: command,
                // Gender:gender,
                // Leavetype:leaveType,
                Status: Status
            })
            console.log(result)
            window.location.reload()
            getAPI()
          }else{
            alert("Please select status")
          }
        }catch(error){
            console.log(error)
        }
    }

    const handleClose = async() => {
        window.location.reload()
      }
      
  return (
    <>
      <title>Admin Login </title>
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
            <h1 className="lmsheaderh1">Leave Requests</h1>
          </div>
          <br></br>
            <br></br>
            <br></br>
          <div className="">
            <div className="">
            <table className="table table-striped border border-3 tablecontent">
                <thead>
                    <tr>
                        <th scope="col">STAFF NAME</th>
                        <th scope="col">VIEW DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                      {
                        lists &&
                     currentPosts?.map((current) => (
                     <tr key={current._id}>
                        <td>{current.Name}</td>
                        <td>
                            <button className="btn btn-primary" data-bs-toggle='modal' data-bs-target={`#leavemanagement${current._id}`} onClick={() => {
                          setStaffName(current.Name)}} ><MdPageview/></button>
                        <div className="modal fade" id={`leavemanagement${current._id}`} tabIndex="-1" aria-labelledby="examplemodalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModal">Update Staff Status</h2>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                          </div>
                          <div className='modal-body'>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.Name} disabled  />
                              <label className='floatingInput'> Name </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.username} disabled  />
                              <label className='floatingInput'> Username </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.Leavetype} disabled />
                              <label className='floatingInput'> Leave Type </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.Numberofdays} disabled />
                              <label className='floatingInput'> Numberofdays </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.StartDate} disabled />
                              <label className='floatingInput'> Start Date  </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.EndDate} disabled />
                              <label className='floatingInput'> End Date </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={current.Reason} disabled />
                              <label className='floatingInput'> Reason </label>
                            </div>
                            <div className='form-floating mb-3'>
                              <input type='text'className='form-control' id='floatingInput'value={command} onChange={(e) => setCommand(e.target.value)} />
                              <label className='floatingInput'> Command </label>
                            </div>
                            <div className="border border-1 rounded staffsusertype">
                            <label className="col-sm-2 col-form-label staffsusertypelabel"> Status </label>
                            <select value={Status} onChange={(e) => setStatus(e.target.value)} className='col-sm-4 leaverequeststatuslabelselect'>
                                <option value={null}>Seletct Status</option>
                                <option value='Accepted'>Accepted</option>
                                <option value='Rejected'>Rejected</option>
                            </select>
                            </div>
                            </div>
                            <div className='modal-footer'>
                            <button className='btn btn-primary' onClick={() => handleSave(current._id)}><BsFillSaveFill/></button>
                            <button className='btn btn-secondary' onClick={handleClose}><IoMdCloseCircle/></button>
                          </div>
                          </div>
                          </div>
                          </div>
                        </td>
                    </tr>
                    ))
                    } 
                </tbody>
            </table>
            </div>
            <nav>
              <ul className='pagination justify-content-center'>
                {pageNumbers.map(number => (
                  <li key={number} className='page-item'>
                    <button onClick={() => paginate(number)} className='page-link paginationbtn'>{number}</button>
                  </li>
                )
                )}
              </ul>
            </nav>
            {/* <div className="col">
            <h4 className="addstaff">Request</h4>
            <form className="col border border-3">
            <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Staff ID </label>
                    <div className="col-sm-10">
                        <input type="text" name="id" value={staffID} onChange={(e) => setStaffID(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Name </label>
                    <div className="col-sm-10">
                        <input type="text" name="name" value={staffName} onChange={(e) => setStaffName(e.target.value)}  />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Leave Type </label>
                    <div className="col-sm-10">
                        <input type="text" name="leavetype" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}  />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Start Date </label>
                    <div className="col-sm-10">
                        <input type="date" name="startdate" value={startdate} onChange={(e) => setStartdate(e.target.value)} />
                        <select value={selectstart} onChange={(e) => setSelectstart(e.target.value)} >
                            <option value="fullday">Full Day </option>
                            <option value="halfday">Half Day</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> End Date </label>
                    <div className="col-sm-10">
                        <input type="date" name="enddate" value={enddate} onChange={(e) => setEnddate(e.target.value)} />
                        <select value={selectend} onChange={(e) => setSelectend(e.target.value)} >
                            <option value="fullday">Full Day </option>
                            <option value="halfday">Half Day</option>
                        </select>
                    </div>
                </div> 
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Reason </label>
                    <div className="col-sm-10">
                        <input type="text" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Command </label>
                    <div className="col-sm-10">
                        <input type="text" name="command" value={command} onChange={(e) => setCommand(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Status </label>
                    <div className="col-sm-10">
                        <select value={Status} onChange={(e) => setStatus(e.target.value)}>
                            <option value='accept'>Accept</option>
                            <option value='reject'>Reject</option>
                        </select>
                    </div>
                </div>
                <button className="leavesave btn btn-primary" onClick={handleSave}>Save</button>
            </form>
            </div> */}
            </div>
        </div>
        </div>
      </div>
    </>
     );
}

export default LeaveRequest;
