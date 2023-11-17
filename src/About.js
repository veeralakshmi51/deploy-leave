import React from 'react'
import './App.css'
const About = () => {
  return (
    <div>
    <div className="p-1 d-flex justify-content-center border lmsheader">
            <h1 className="lmsheaderh1">About</h1></div>
           <h2 className="tacheading"> Terms and conditions for Taking leave: </h2>
           <h5 className="terms"> Leave Rules and Conditions: </h5>
           <div className="conditions">
            <table>
                <td>
           <ul>
             <li><p>If the planned leave is to be taken, one-week prior permission should be obtained otherwise the leave will be included in the emergency leave.</p></li>
             <li><p>It is sufficient to provide inform at the time of taking emergency leave or sick leave,but please don’t misuse this leave </p></li>
             <li><p>After completion of emergency leave, planned leave taken without one-week prior permission shall be included in the Loss of pay.</p></li>
             <li><p>Menstrual leave cannot be taken in bulk without taking it every month</p></li>
             <li><p>Menstrual leave can be taken only once per month, but please don’t misuse this leave</p></li>
           </ul>
           </td>
           </table>
           </div>
           <div className="checkbox-container">
          <input type="checkbox" id="agreeToTerms" />
          <label htmlFor="agreeToTerms"> I agree to the terms and conditions</label>
        </div>
 </div>
 
       
 
  )
}

export default About