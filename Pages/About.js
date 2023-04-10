import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
// import {AuthProvider} from '../Contexts/AuthContext';
import {useAuth} from '../Contexts/AuthContext';
// import {Link,useHistory} from "react-router-dom"




//     export default function Logout(){
// 	const[error,setError] = useState("")
// 	const[currentUser,logout] = useAuth()
// 	// const history = useHistory()


// 	async function handleLogout(){
// 		setError("")

// 		try{
// 			await logout()
// 			history.push("/login")
// 		}catch{
// 			setError("Failed to log out")
// 		}
// 	}
// }
export default function About() {
		return (
			<View>

				<Text style={style.title}>
					A propos de moi
				</Text>
			</View>
			
		)
	}

const style = StyleSheet.create({
	title:{
		backgroundColor: 'white',
		fontSize:10,
		marginBottom:50
	}
})

