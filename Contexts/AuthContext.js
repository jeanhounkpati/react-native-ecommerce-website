// import React,{useState,useContext,useEffect} from 'react'
// // import {auth} from '../firebase'
// import auth from  "@react-native-firebase/auth"

// export const AuthContext = React.createContext();

// export function useAuth() {
//     return useContext(AuthContext)
// }
// export function AuthProvider({children}){
//     const[currentUser,setCurrentUser] = useState()
//     const[loading,setLoading] = useState(true)

//     function signup(email,password){
//         return auth.CreateUserWithEmailAndPassword(email,password)
//     }
//     // function login(email,password){
//     //     return auth.SigninWithEmailAndPassword(email,password)
//     // }


//     // function logout(){
//     //     return auth.signout()
//     // }
//     // function resetPassword(email){
//     //     return auth.sendPasswordResetEmail()
//     // }
//     useEffect(()=>{
//         const unsubscribe=auth.onAuthStateChanged(user=>{
//             setCurrentUser(user)
//             setLoading(false)
//         })
//         return unsubscribe
//     },[])
//     const value = {
//         signup,
//         currentUser
//         //login,
//         // logout,
//         // resetPassword
//     }
//     return(
//         <AuthContext.Provider value ={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }