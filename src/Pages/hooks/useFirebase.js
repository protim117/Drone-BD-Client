import axios from "axios";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile ,onAuthStateChanged,signOut   } from "firebase/auth";
import React,{ useState } from "react";
import { useEffect } from "react";
import initFirebase from "../Login/Firebase/firebase.init";

initFirebase();


const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[authError,setAuthError]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const[isAdmin,setIsAdmin]=useState(false);

    
const auth = getAuth();

    // register method 
    const register=(name,email,password,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // these two line is for setting user temporary 
                const newUser = {email,displayName:name};
                setUser(newUser);
                
                saveUser(newUser.email,newUser.displayName);
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                setAuthError('');
                const goBack=()=> history.replace("/")
                setTimeout(goBack,3000);
            })
            .catch((error) => {
               
                setAuthError(error.message);
                
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    // login menthod 
    const login=(email,password,location,history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                setAuthError('')
                const goBack=()=> history.replace(location?.state?.from || "/")
                setTimeout(goBack,3000);
            })
            .catch((error) => {
                
                setAuthError(error.message);
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    // logout method 

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          }).finally(()=> setIsLoading(false))
    }

    // Save a user in database 
    const saveUser=(email,displayName)=>{
        const newUser={email,displayName};
        const uri='https://ancient-temple-50859.herokuapp.com/users' ;
        axios.post(uri,newUser)
        .then(data=> {})  
      }

    //   observing user 
    useEffect(()=>{
       const unSubscribed=onAuthStateChanged(auth, (user) => {

            if (user) {
            setUser(user);
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return ()=> unSubscribed;
    },[])

    // Checking if user is an admin 

useEffect(()=>{
    const uri=`https://ancient-temple-50859.herokuapp.com/users/${user.email}`
    fetch(uri)
    .then(res=> res.json())
    .then(data=> setIsAdmin(data.admin))
  },[user.email])


    return{
        user,isLoading,authError,setAuthError,login,logOut,register,isAdmin
    }
}

export default useFirebase;