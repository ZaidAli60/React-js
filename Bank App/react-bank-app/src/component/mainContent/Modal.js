import React from 'react'

function Modal() {
  return (
    <>

      <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title text-center " id="exampleModalLabel">Enter Account Details Below</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"> CNIC Number </label>
                    <input type="text" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Branch Code</label>
                    <input type="number" className="form-control" id="inputEmail4" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"> Account Number  </label>
                    <input type="number" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">Choose Account</label>
                    <select id="inputState" className="form-select">
                      <option selected>Choose Account Type</option>
                      <option>Saving</option>
                      <option>Current</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Initial Deposit   </label>
                    <input type="number" className="form-control" id="inputPassword4" />
                  </div>
               
                  
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Modal;