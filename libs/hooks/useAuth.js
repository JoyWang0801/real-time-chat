import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


function useAuth(){
    const [user, setLocalUser] = useState(null);

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log('There is a user.');
                setLocalUser(user);
            } else {
                console.log('There is no user.')
            }
        })

        return () => subscriber();
    }, [user])

    return user;
}


export default useAuth;