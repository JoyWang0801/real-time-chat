import { auth,db } from "@/libs/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const GetUserInfo = () => {
    const [currentUser, setCurrentUser] = useState(null)

    const getInfo = async() => {
        const user = auth.currentUser;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setCurrentUser(docSnap.data().username)
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        return () => subscriber();
    }

    useEffect(() => {
        getInfo();
    }, [])
    



  return currentUser;
}

export default GetUserInfo