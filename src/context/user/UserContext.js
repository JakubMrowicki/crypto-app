import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOut = () => {
    return auth.signOut()
  }

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const getUser =() => {
    return currentUser
  }

  return <UserContext.Provider value={{
    currentUser,
    logIn,
    signOut,
    signUp,
    getUser
  }}>
    {children}
  </UserContext.Provider>
}

export default UserContext