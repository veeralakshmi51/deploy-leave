import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import './App.css';
//import dp1 from './img/dp1.png';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {AiFillBell} from 'react-icons/ai'

const StaffLeave = () => {

  const [lists,setLists] = useState('')
  const [loading,setLoading] = useState(false)
  const [postPerPage] = useState(6)
  const [currentPage,setCurrentPage] = useState(1)
  const pageNumbers = []
  for (let i=1; i<= Math.ceil(lists.length/postPerPage); i++){
    pageNumbers.push(i)
  }
  // const recordsPerPage = 6
  // const pageCount = lists? Math.ceil(lists.length/recordsPerPage) : 0;
  // if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount+1)

  // const pagination = (pageNo) => {
  //   setCurrentPage(pageNo)
  //   const startIndex = (pageNo - 1) * recordsPerPage
  //   const paginatedPosts = _(lists).slice(startIndex).take(recordsPerPage).value()
  //   setPaginatedPosts(paginatedPosts)
  // }

  const getAPI = async() => {
    try{
      const result = await axios.get ("https://elonleavemanagement.onrender.com/staff/leave/get_all")
      console.log(result.data)
      // result.data.data.StartDate(result.data.data.StartDate?.slice(0,10))
      setLists(result.data.data)
      // setStartdate(result.data.data.StartDate?.slice(0,10))
      // setEnddate(result.data.data.Enddate?.slice(0,10))
      console.log(lists)
    }catch(error){
      console.log(error)
    }
    }

    useEffect(() => {
      getAPI()
    },[]);

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = lists.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const handleDelete = async(_id) => {
      const conform = window.confirm("Are you sure to delete?")
      if(conform) {
        const result = await axios.delete(`https://elonleavemanagement.onrender.com/staff/leave/${_id}`)
        console.log(result)
        getAPI()
      }
      else alert("cancelled")
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
  <MenuItem className="sidebarsubmenu" component={<Link to="/staffs" />}>Add New Staff</MenuItem>
  </SubMenu>
  <SubMenu label="Leaves">
    <MenuItem className="sidebarsubmenu" component={<Link to="/leaverequest" />}>Leave Requests</MenuItem>
  </SubMenu>
    <SubMenu label="Report">
      <MenuItem className="sidebarsubmenu" component={<Link to="/staffdetails" />}> Staff Details </MenuItem>
      <MenuItem className="sidebarsubmenu" component={<Link to="/staffleaves" />}> Staff Leaves </MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/notication" />}> Notification <AiFillBell/></MenuItem>
    {/* <MenuItem component={<Link to="/sendmessage" />}> Send Message </MenuItem> */}
    <MenuItem component={<Link to="/logout" />}> Logout </MenuItem>
  </Menu>
</Sidebar>
    <div className="col py-3">
    <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">Staff Leave Details</h1>
          </div>
          <br></br><br></br>
          <div className="row">
            <div className="">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STAFF NAME</th>
                        <th scope="col">LEAVE TYPE</th>
                        <th scope="col">START DATE</th>
                        <th scope="col">END DATE</th>
                        <th scope="col">REASON</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">COMMANDS</th>
                        <th scope='col'>ACTION</th>
                    </tr>
                </thead>
                <br></br>
                <tbody>
                      {
                        lists.length>=0 &&
                     currentPosts ?.map((current) => (
                     <tr key={current._id}>
                        <td>{current.Name}</td>
                        <td>{current.Leavetype}</td>
                        <td>{current.StartDate.slice(0,10)}</td>
                        <td>{current.EndDate.slice(0,10)}</td>
                        <td>{current.Reason}</td>
                        <td>{current.Status}</td>
                        <td>{current.Command}</td>
                        <td><button className='btn btn-outline-danger' onClick={() => handleDelete(current._id)}><RiDeleteBin5Fill/></button></td>
                      </tr>
                     ))
                    }
                </tbody>
            </table>
            {/* <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'} /> */}
            </div>
            {/* <nav className='d-flex justify-content-center'>
              <ul className='pagination'>
                {
                  pages.map((page) => (
                    <li className={page === currentPage ? "page-item active" : "page-item"}>
                      <p className='page-link' onClick={() => pagination(page)}>{page}</p>
                    </li>
                  ))
                }
              </ul>
            </nav> */}
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
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default StaffLeave;
