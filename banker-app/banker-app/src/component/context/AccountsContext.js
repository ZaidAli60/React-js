import { createContext, useContext, useState, useEffect } from "react";
import { firestore } from "../config/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore/lite";
import { toast } from "react-toastify";
import { useAuthContext } from "./Authcontext";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [transactionData, settransactionData] = useState([])

  const { user } = useAuthContext();


  const readDocs = async () => {
    const collectName = "Account";
    const docsCollectRef = collection(firestore, collectName);
    let array = [];
    const q = query(docsCollectRef, where("useruid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push({ ...doc.data(), id: doc.id, });
    });
    setDocuments(array);
  };
  
  useEffect(() => {
    readDocs();
  }, [user.uid]);
  
  
  const readTransaction = async () => {
    const collectName = "transactions";
    const docsCollectRef = collection(firestore, collectName);
    let array = [];
    const q = query(docsCollectRef, where("useruid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push({
        ...doc.data(),
        id: doc.id,
        times: doc
          .data()
          .createday.toDate()
          .toLocaleString([], { hour12: true }),
      });
    });
    settransactionData(array);
  };

  useEffect(() => {
    readTransaction();
  }, [user.uid]);
  const deleteDocument = async (document) => {
    const collectName = "Account";
    const docsCollectRef = collection(firestore, collectName);
    await deleteDoc(doc(firestore, collectName, document.id));

    let newArray = documents.filter((doc) => {
      return document.id !== doc.id;
    });
    toast.error("Delete Account.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setDocuments(newArray);
  };

  return (
    <AccountContext.Provider
      value={{
        documents,
        setDocuments,
        deleteDocument,
        transactionData
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useGolbalContext = () => {
  return useContext(AccountContext);
};
export { AccountContext, AccountProvider };
