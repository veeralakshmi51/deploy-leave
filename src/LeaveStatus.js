import React from 'react'

const LeaveStatus = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row flex-nowrap">
      <div className="col py-3">
        <div className="p-1 d-flex justify-content-center border">
          <h2>Staff Leave Management</h2>
        </div>
    <div className='leaveapply'>
        <h4>Leave Status</h4>
        <form className='col border border-3'>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label">Start Date </label>
                <div className='col-sm-10'>
                <input type='date' name='startdate' />
                <select>
                    <option>Full Day</option>
                    <option>Half Day</option>
                </select>
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label">End Date </label>
                <div className='col-sm-10'>
                <input type='date' name='enddate' />
                <select>
                    <option>Full Day</option>
                    <option>Half Day</option>
                </select>
                </div>
            </div>
            <div className='form-group row'>
            <label className="col-sm-2 col-form-label"> Admin Status </label>
            <div className='col-sm-10'>
            <input type='text' name='status' />
            </div>
            </div>
            <div className='form-group row'>
            <label className="col-sm-2 col-form-label"> HR Status </label>
            <div className='col-sm-10'>
            <input type='text' name='status' />
            </div>
            </div>
            <div className='form-group row'>
            <label className="col-sm-2 col-form-label"> Admin Commands </label>
            <div className='col-sm-10'>
            <input type='text' name='status' />
            </div>
            </div>
            <div className='form-group row'>
            <label className="col-sm-2 col-form-label"> HR command </label>
            <div className='col-sm-10'>
            <input type='text' name='command' />
            </div>
            </div>
        </form>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default LeaveStatus
