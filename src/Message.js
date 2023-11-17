import React from 'react'

const Message = () => {
  return (
    <>
    <title> Staff Login </title>
    <div className='container-fluid'>
        <div className='row flex-nowrap'>
                <div className='col py-3'>
                <div className="p-1 d-flex justify-content-center border">
                <h2>Staff Leave Management</h2>
                </div>
                <table className="table table-striped border border-3">
                <thead>
                    <tr>
                        <th scope="col">SMsg</th>
                        <th scope="col">SDate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                    </tr>
                </tbody>
            </table>
            <div className=''>
                <button className='btn btn-primary'>Delete</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Message
