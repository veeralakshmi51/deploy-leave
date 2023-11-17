import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import ChangePassword from './ChangePassword'
import EditStaffDetails from './Editstaffdetails'
import LeaveApply from './LeaveApply'
import LeaveRequest from './LeaveRequest'
import Leaves from './Leaves'
import LeavesReport from './LeavesReport'
import Login from './Login'
import Logout from './Logout'
import Message from './Message'
import PrivateRoutes from './PrivateRoutes'
import Profile from './Profile'
import SendMessage from './SendMessage'
import StaffDetails from './StaffDetails'
import StaffLeaves from './StaffLeaves'
import Stafflogin from './Stafflogin'
import Stafflogout from './Stafflogout'
import Staffs from './Staffs'
import Home from './Home'
import ForgotPassword from './ForgotPassword'
import About from './About'
import Notification from './Notification'
import VerifyOtp from './VerifyOtp'
import UpdatePassword from './UpdatePassword';

const App = () => {
  return (
    <div className="App">
  {/* //  <Routes>
  //   <Route path='/' element={<Login />} />
  //   <Route path='/admin' element={<Admin />} />
  //   <Route path='/hrlogin' element={<HrLogin />} />
  //   <Route path='/staff' element={<Staff />} />
  //   <Route path='/staff/addStaff' element={<AddStaff />} />
  //   <Route path='/leave' element={<Leave />} />
  //   <Route path='/leave/leaverequest' element={<LeaveRequest />} />
  //   <Route path='/report' element={<Report />} />
  //   <Route path='/report/staffdetails' element={<StaffDetails />} />
  //   <Route path='/report/staffleaves' element={<StaffLeaves />} />
  //   <Route path='/sendmessage' element={<SendMessage />} />
  //  </Routes> */}

  <Routes>
    <Route path='/editstaffdetails' element={<EditStaffDetails />} />
    <Route exact path='/' element={<Home/>}/>
    <Route path='/verifyotp' element={<VerifyOtp/>}/>
  <Route  path='/login' name="Login" element={<Login />} />
 
  <Route path='/forgotpassword' element={<ForgotPassword/>}/>
  <Route path='/updatepassword' element={<UpdatePassword/>}/>
  
  <Route path='/profile' element={<Profile />} />
  <Route path='/about' element={<About/>}/>
    <Route element={<PrivateRoutes />} >
      <Route path='/admin' name="Home" element={<Admin />} />
      <Route path='/staffs' name="Staffs" element={<Staffs />} />
      {/* <Route path='/admin/leave' name="Leave" element={<Leave />} /> */}
      <Route path='/leaverequest' name="LeaveRequest" element={<LeaveRequest />} />
      {/* <Route path='/admin/report' name="report" element={<Report />} /> */}
      <Route path='/staffdetails' name="StaffDetails" element={<StaffDetails />} />
      <Route path='/staffleaves' name="StaffLeaves" element={<StaffLeaves />} />
      <Route path='/sendmessage' name="sendmessage" element={<SendMessage />} />
      <Route path='/logout' name="logout" element={<Logout />} />
      <Route path='/stafflogin' element={<Stafflogin />} />
     
      <Route path='/message' element={<Message />} />
      {/* <Route path='/leave' element={<Leave />} /> */}
      <Route path='/leaveapply' element={<LeaveApply />} />
      {/* <Route path='/leavestatus' element={<LeaveStatus />} /> */}
      <Route path='/leaves' element={<Leaves />} />
      {/* <Route path='/report' element={<Report />} /> */}
      <Route path='/leavesreport' element={<LeavesReport />} />
      {/* <Route path='/password' element={<Password />} /> */}
      <Route path='/changepassword' element={<ChangePassword />} />
      <Route path='/stafflogout' name="Stafflogout" element={<Stafflogout />} />
      <Route path='/notification' name="Notification" element={<Notification/>}/>
      
      
    </Route>
  </Routes>
  </div>
  )
}

export default App
