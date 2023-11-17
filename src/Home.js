import React from 'react';
import {Link} from 'react-router-dom'
import './App1.css'
import logo from './logo.png'
import {RiLoginCircleFill} from 'react-icons/ri'



function App() {
  // const [isSliding,setSliding]=useState(false);
  // const toggleSlide=()=>{
  //   setSliding(!isSliding);
  // }
  return (
    <div>
      {/* <header className={`dark-header ${isSliding?'slide':''}`}> */}
      <header className='dark-header'>
       
        <nav>
          <div className="logo"> 
            <img src={logo} alt="logo-img" className="small-logo" />
           
          </div>
          <ul className="nav-links">
            
            <li><Link to="/login">Login Panel<RiLoginCircleFill/></Link></li>
            {/* <li><Link to='/about'>About</Link></li> */}
          </ul>
        </nav>
      </header>

      <section className="hero">
        {/* <div className={`hero-content ${isSliding?'slide':''}`}> */}
        <div className='hero-section'>
          <h1 className='scroll-text'>Welcome to Our Leave Management System</h1>
          <h3>Effortlessly manage staff leaves and approvals with our user-friendly system.</h3>
          <Link to='/login' className="cta-button" >Get Started</Link>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <i className="fas fa-calendar"></i>
          <h2>Easy Leave Requests</h2><br></br>
          <h5>Submit leave requests with just a few clicks.</h5>
        </div>
        <div className="feature">
          <i className="fas fa-check-circle"></i>
          <h2>Efficient Approval Workflow</h2><br></br>
          <h5>Streamline the approval process for managers.</h5>
        </div>
        <div className="feature">
          <i className="fas fa-chart-pie"></i>
          <h2>Leave Tracking & Analytics</h2><br></br>
          <h5>Monitor leave balances and generate reports.</h5>
        </div>
      </section>
      

      <footer className="dark-footer">
      <section>
        <h6>&copy; 2023 Leave Management System. All rights reserved.</h6></section>
      </footer></div>
    
  );
}

export default App;
