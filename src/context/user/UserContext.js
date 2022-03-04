import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase-config";

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
    return auth.signInWithEmailAndPassword(email, password)
  }

  const signOut = () => {
    return auth.signOut()
  }

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const getUser =() => {
    return auth.currentUser
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