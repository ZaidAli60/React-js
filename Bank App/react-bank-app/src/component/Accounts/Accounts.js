import React,{useState,useEffect} from "react";
import { collection, getDocs ,deleteDoc,doc} from "firebase/firestore/lite"
import { firestore } from "../config/firebase"
import { toast } from "react-toastify";

function Accounts() {
  const [doucuments, setdoucuments] = useState([])
  const [isLoading, setisLoading] = useState(false);
  const collectionName = "User";
  const collectionRef = collection(firestore, collectionName);

  useEffect(() => {
    const readDocs = async () => {
      setisLoading(true);
      let newArray = [];
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        newArray.push({ ...doc.data(), id: doc.id });
      });
      setdoucuments(newArray);
      setisLoading(false);
    };
    readDocs();
  }, []);

  const deleteDocs = async (document) => {
    console.log(document);
    await deleteDoc(doc(firestore, collectionName, document.id))
    let array = doucuments.filter((items) => {
      return document.id !== items.id;
    })
      toast.error("Account Delete", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    setdoucuments(array)
}






  

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        {isLoading ? (
          <div className="d-flex justify-content-center mt-5">
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
                <th scope="col">CNIC</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody >
              {doucuments.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index}</th>
                    <td>{item.branchCode}</td>
                    <td>{item.accountNumber}</td>
                    <td className="text-primary">{item.fullName}</td>
                    <td>{item.chooseAccount}</td>
                    <td className="text-primary">{item.initialDeposit}</td>
                    <td>{item.cnicNumber}</td>
                    <td>
                      <button
                        className="btn bg-danger text-white"
                        onClick={()=> deleteDocs(item)}
                      >
                        Delete
                      </button>
                    </td>
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
