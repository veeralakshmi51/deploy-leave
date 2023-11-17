
const SendMessage = () => {
  return (
   <>
   <div className="col py-3">
    <div className="p-1 d-flex justify-content-center border">
        <h2> Staff Leave Management </h2>
    </div>
    <div className="row">
        <h4 className="addstaff"> Send Message </h4>
        <div className="col-sm-4 border border-3">
            <button className="btn btn-primary"> Select All</button>
        </div>
        <div className="col messagecol">
        <label className="message col-sm-2">Enter The Message: </label>
        <div className="messageinput col-sm-10">
        <input type="text" name="sendmessage" />
        </div>
        <button className="col-sm-2 btn btn-primary"> Clear </button>
        <button className="col-sm-2 btn btn-primary"> Send </button>
    </div>
    </div>
   </div>
   </>
  )
}

export default SendMessage
