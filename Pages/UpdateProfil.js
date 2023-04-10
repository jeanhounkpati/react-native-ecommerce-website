// import React from 'react';
// import {Text,View,Image,TextInput,ImageBackground,FlatList,TouchableOpacity,Button} from 'react-native';
// import images from '../Components/Constants/images';
// // import {AuthProvider} from '../Contexts/AuthContext';
// import {useAuth} from '../Contexts/AuthContext';
// // import {Link,useHistory} from "react-router-dom"

// export default function UpdateProfil(){


// 	const emailRef =useRef()
// 	const passwordRef =useRef()
// 	const passwordConfirmRef =useRef()
// 	const {register} =useAuth()
// 	const [error,setError] = useState("")
// 	// 	const history = useHistory()


// 	async function handlesubmit(e){
// 		e.preventDefault()
// 		if (passwordRef.current.value!==passwordConfirmRef.current.value)
// 		{
// 			return setError("password do not match")
// 		}
// 		try{
// 			setError("")
// 			setLoading(true)
// 			await signup (emailRef.current.value,passwordRef.current.value)
// 		}catch {
// 			setError("Failed to create an account")
// 			setLoading(false)
// 		}
// 	}
// 		return (
// <View style = {{ flex:1,justifyContent:'center',
// 			alignItems:'center'
// 			}}>
// 				<Image
// 				source = {images.fond}
// 				resizeMode = 'cover'
// 							style = {{
// 								width : '100%',
// 								height:200
// 							}}
// 				/>

				
// 				<View>
// 					<Text style = {{fontSize:50,padding:20}}>Update profile</Text>
// 				</View>


// 				<View style={{
// 					flexDirection:"row",
// 					marginHorizontal:55,
// 					opacity:0.4,
// 					marginTop : 5
// 				}}
// 				>
// 					<TextInput
// 						placeholder='Email'
// 						underlinedColorAndroid = 'transparent' style = {{
// 						height:40,
// 						borderColor : 'gray',
// 						borderWidth:1,
// 						paddingHorizontal:10,
// 						borderRadius : 20
// 					}}
// 					/>
// 				</View>


// 				<View style = {{

// 					flexDirection:"row",
// 					marginTop : 5,
// 					marginHorizontal:55,
// 					opacity:0.4,
// 					marginTop : 5
// 					}}
// 					>
// 					<TextInput 
// 							placeholder='leave blank to keep the same'
// 							underlinedColorAndroid = 'transparent' style = {{
// 							height:40,
// 							borderColor : 'gray',
// 							borderWidth:1,
// 							paddingHorizontal:10,
// 							borderRadius : 20
// 					}}
// 					/>
// 				</View>


// 				<View style={{
// 					flexDirection:"row",
// 					marginHorizontal:55,
// 					opacity:0.4,
// 					marginTop : 5
// 				}}
// 				>
// 					<TextInput
// 						placeholder='leave blank to keep the same'
// 						underlinedColorAndroid = 'transparent' style = {{
// 						height:40,
// 						borderColor : 'gray',
// 						borderWidth:1,
// 						paddingHorizontal:10,
// 						borderRadius : 20
// 					}}
// 					/>
// 				</View>

// 				<View  style={{backgroundColor:'pink'}}>
// 					<Button title='Update'
// 					/>
// 				</View>

// 				<View>
// 					<Text style = {{fontSize:20,padding:20}}>Already a member</Text>
// 				</View>

// 				<View style={{flexDirection:'row',margin:20}}>
// 					<TouchableOpacity>cancel</TouchableOpacity>
// 				</View>


// 			</View>
				
// 		)
// 	}
