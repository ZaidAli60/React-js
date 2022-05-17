import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { firestore } from "../config/firebase";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";

function Modal() {
  const [fullName, setfullName] = useState("");
  const [cnicNumber, setcnicNumber] = useState("");
  const [branchCode, setbranchCode] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [initialDeposit, setinitialDeposit] = useState("");
  const [chooseAccount, setChooseAccount] = useState("");
 
  // const [confirm, setConfirm] = useState(false);
    // if (confirm) {
    //   return (
    //     <Navigate
    //       to={{
    //         pathname: "/create-account",
    //       }}
    //     />
    //   );
    // }

  const collectionName = "User";
  const collectionRef = collection(firestore, collectionName);
  const addUserData = async (e) => {
    e.preventDefault();
    // setConfirm(true);

    const formData = {
      fullName,
      cnicNumber,
      branchCode,
      accountNumber,
      chooseAccount,
      initialDeposit,
    };
    try {
      const addRef = await addDoc(collectionRef, formData);
      toast.success("User has been added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log(addRef.id);
    } catch (error) {
      toast.error("Something Went Wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
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
                <form className="row g-3" onSubmit={addUserData}>
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
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
                    <select
                      id="inputState"
                      className="form-select"
                      onChange={(e) => setChooseAccount(e.target.value)}
                    >
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
