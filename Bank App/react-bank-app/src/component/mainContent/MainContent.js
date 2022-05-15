import React, { useState } from "react";
import Modal from "./Modal";

function MainContent() {
  return (
    <>
      <div>
        <div class="container">
          <div class="row my-5">
            <div class="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center ">
                    <i class="bi bi-person-fill"></i>Accounts
                  </h5>
                  <hr />
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="bi bi-plus"></i>
                      Add New Account
                    </button>
                    <button className="btn btn-warning text-white ">
                      View All Accounts
                    </button>
                  </div>
                  <hr />
                  <div className="text-center">
                    <h4>0</h4>
                    <p>Accounts</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center ">
                    <i class="bi bi-cash"></i>Transactions
                  </h5>
                  <hr />
                  <div className="text-center ">
                    <button className="btn btn-warning text-white ">
                      View All Accounts
                    </button>
                  </div>
                  <hr />
                  <div className="text-center">
                    <h4>0</h4>
                    <p>Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal />
      </div>
    </>
  );
}

export default MainContent;
