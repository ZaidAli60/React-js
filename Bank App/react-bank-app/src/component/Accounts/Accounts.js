import React,{useState,useEffect} from "react";
import { collection, getDocs } from "firebase/firestore/lite"
import {firestore} from "../config/firebase"
function Accounts() {
  const [doucuments, setdoucuments] = useState([])
  const [isLoading, setisLoading] = useState(false);
  const collectionName = "User";
  const collectionRef = collection(firestore, collectionName);


  const readDocs = async () => {
    setisLoading(true)
    let newArray = [];
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      newArray.push({...doc.data(),id:doc.id,})
    })
    setdoucuments(newArray);
    setisLoading(false)
  } 

  useEffect(() => {
    readDocs();
  }, [])
  

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          height: "500px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
          </div>
        ) : (
          <table className="table table-striped table-hove">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Branch Code</th>
                <th scope="col">Account #</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>

            <tbody>
              {doucuments.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{item.branchCode}</td>
                    <td>{item.accountNumber}</td>
                    <td className="text-primary">{item.fullName}</td>
                    <td>{item.chooseAccount}</td>
                    <td className="text-primary">{item.initialDeposit}</td>
                    <td>{item.cnicNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Accounts;
