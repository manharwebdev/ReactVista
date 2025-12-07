import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
  const [user, setUser] = useState(()=> {
    try { return JSON.parse(localStorage.getItem('user')) } catch { return null }
  })

  function login(userObj){
    setUser(userObj)
    try { localStorage.setItem('user', JSON.stringify(userObj)) } catch {}
  }
  function logout(){
    setUser(null)
    try { localStorage.removeItem('user') } catch {}
  }

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)
