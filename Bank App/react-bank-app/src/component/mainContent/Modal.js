import React, { useState } from "react";

// import {useNavigate} from "react-router-dom"

function Modal() {
  const [fullName, setfullName] = useState("");
  const [cnicNumber, setcnicNumber] = useState("");
  const [branchCode, setbranchCode] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [initialDeposit, setinitialDeposit] = useState("");
  const [data, setData] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      fullName,
      cnicNumber,
      branchCode,
      accountNumber,
      initialDeposit,
    };

    setData([obj]);
    setfullName("");
    setcnicNumber("");
    setbranchCode("");
    setinitialDeposit("");
    setaccountNumber("");
    console.log(obj);
  };
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title text-center " id="exampleModalLabel">
                  Enter Account Details Below
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      value={fullName}
                      onChange={(e) => setfullName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      {" "}
                      CNIC Number{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      value={cnicNumber}
                      onChange={(e) => setcnicNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Branch Code
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputEmail4"
                      value={branchCode}
                      onChange={(e) => setbranchCode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      {" "}
                      Account Number{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPassword4"
                      value={accountNumber}
                      onChange={(e) => setaccountNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                      Choose Account
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Choose Account Type</option>
                      <option>Saving</option>
                      <option>Current</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Initial Deposit{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPassword4"
                      value={initialDeposit}
                      onChange={(e) => setinitialDeposit(e.target.value)}
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      onClick={formSubmitHandler}
                      className="btn btn-primary"
                    >
                      Create New Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
