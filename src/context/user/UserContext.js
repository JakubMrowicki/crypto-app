import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOut = () => {
    return signOut()
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