import { createContext,useState } from "react";

export const FirebaseContext=createContext(null)
export const AuthContext=createContext(null)

export default function Context({children}){
   const [user,setuser]=useState('nouser')

   return(
    <AuthContext.Provider  value={{user,setuser}}> 
      {children}  
    </AuthContext.Provider>
   )
}