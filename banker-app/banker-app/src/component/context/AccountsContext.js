import { createContext, useContext ,useState,useEffect} from "react";
import { firestore } from "../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore/lite";
import { toast } from "react-toastify";


const AccountContext = createContext();

const AccountProvider = ({children})=>{
    const [documents, setDocuments] = useState([]);

    const collectName = "Account";
    const docsCollectRef = collection(firestore, collectName);
    const readDocs = async () => {
      let array = [];
      const querySnapshot = await getDocs(docsCollectRef);
      querySnapshot.forEach((doc) => {
        array.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(array);
    };
  
    useEffect(() => {
      readDocs();
    }, []);
    const deleteDocument = async (document) => {
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
  
  return <AccountContext.Provider value={{
    documents,
    setDocuments,
    deleteDocument,
  }}>
   {children}
  </AccountContext.Provider>
}

export const useGolbalContext = ()=>{
    return useContext(AccountContext)
}
export {AccountContext,AccountProvider}