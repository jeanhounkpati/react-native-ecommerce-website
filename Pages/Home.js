import React from 'react';
import {useRef,useState} from 'react';
import {View,StyleSheet,Text,SafeAreaView,TouchableOpacity,Image,FlatList} from 'react-native';
import icons from '../Components/Constants/icons';
import images from '../Components/Constants/images';




// export default class Home extends React.Component {
// 	render() {
// 		return (
// 			<View>

// 				<Text>La page de Home</Text>
// 			</View>
// 		)
// 	}
// }



const Home = ({navigation})=> {

	const [error,setError] = useState('');


// const logout = async()=>{
// 	try{
// 		const response = await firebase.auth().signOut();
// 		navigation.navigate("CheckoutForm")				
// 	}catch(err){
// 		setError("fail to logout")
// 	}
// }


	const categoryData=[
	{
		id:1,
		name:"Burger",
		icon:icons.burger,
	},

	{
		id:2,
		name:"Bacon",
		icon:icons.bacon,
	},

	{
		id:3,
		name:"Hotdog",
		icon:icons.hotdog,
	},

	{
		id:4,
		name:"Frites",
		icon:icons.patatesfrites,
	},

	{
		id:5,
		name:"Snack",
		icon:icons.hamburger,
	},
	{
		id:6,
		name:"Pizza",
		icon:icons.pizza,
	},

	{
		id:7,
		name:"Salade",
		icon:icons.salade,
	},

	{
		id:8,
		name:"Taco",
		icon:icons.taco,
	},
	{
		id:9,
		name:"Chicken",
		icon:icons.chickenleg,
	},
	{
		id:10,
		name:"Suchi",
		icon:icons.friedchicken,
	}

	]


	const restaurantdata=[

		{
			id:1,
			name:'ByTsevie Kitchen',
			rating: 4.8,
			categories:[1,3],
			picture:images.image21,
			duration:"30-45 min",
			menu:[
				{
				menuId :1,
				name:"Humberger1",
				price:43,
				calories:125,
				description: 'lorem ipsum dolor it amet cojhsd ',
				picture:images.image1,
				},
				{
				menuId :2,
				name:"Humberger2",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd ',
				picture:images.image2,
				},

				{
				menuId :3,
				name:"Humberger3",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd ',
				picture:images.image3,
				},

				{
				menuId :4,
				name:"Humgerber4",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd ',
				picture:images.image4,
				}
			]
		},	


		{
			id:2,
			rating: 4.8,
			name:'ByLomé Kitchen',
			categories:[2,4,5],
			picture:images.image22,
			duration:"30-45 min",
			menu:[
				{
				menuId :5,
				name:"Humberger1",
				price:43,
				calories:125,
				description: 'lorem ipsum dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image5,
				},
				{
				menuId :6,
				name:"Humberger2",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image6,
				},

				{
				menuId :7,
				name:"Humberger3",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image7,
				},

				{
				menuId :8,
				name:"Humgerber4",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image8,
				}
			]
		},	


		{
			id:3,
			name:'ByKara Kitchen',
			rating: 4.8,
			categories:[1,2,3],
			picture:images.image23,
			duration:"30-45 min",
			menu:[
				{
				menuId :9,
				name:"Humberger1",
				price:43,
				calories:125,
				description: 'lorem ipsum dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image9,
				},
				{
				menuId :10,
				name:"Humberger2",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image10,
				},

				{
				menuId :11,
				name:"Humberger3",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image11,
				},

				{
				menuId :12,
				name:"Humgerber4",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image12,
				}
			]
		},	

		{
			id:4,
			name:'BySokodé Kitchen',
			rating: 4.8,
			categories:[5,7],
			picture:images.image24,
			duration:"30-45 min",
			menu:[
				{
				menuId :13,
				name:"Humberger1",
				price:43,
				calories:125,
				description: 'lorem ipsum dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image13,
				},
				{
				menuId :14,
				name:"Humberger2",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image14,
				},

				{
				menuId :15,
				name:"Humberger3",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image15,
				},

				{
				menuId :16,
				name:"Humgerber4",
				price:43,
				calories:125,
				description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
				picture:images.image16,
				}
			]
		},

				{
					id:5,
					name:'Bykpalimé Kitchen',
					rating: 4.8,
					categories:[5,7],
					picture:images.image25,
					duration:"30-45 min",
					menu:[
						{
						menuId :17,
						name:"Humberger1",
						price:43,
						calories:125,
						description: 'lorem ipsum dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
						picture:images.image17,
						},
						{
						menuId :18,
						name:"Humberger2",
						price:43,
						calories:125,
						description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
						picture:images.image18,
						},
		
						{
						menuId :19,
						name:"Humberger3",
						price:43,
						calories:125,
						description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
						picture:images.image19,
						},
		
						{
						menuId :20,
						name:"Humgerber4",
						price:43,
						calories:125,
						description:'lorem ipsum,dolor it amet cojhsd sdhs hdzu zuiez izguef uzfhze fihzuef izfhze zifze zzfz',
						picture:images.image20,
						}
					]
				}	

	]
	

	const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantdata)


	





	function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantdata.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }
// 	function onSelectCategory(category){
// 		// filter restaurant
// 	let restaurantList = restaurantData.filter(a=>a.categories.includes(category.id))
// 	setRestaurants(restaurantList)
// 	setSelectedCategory(category)
// 	}
	


function renderHeader(){

		return (
				<View style = {{ flexDirection:'row',height : 50}}>
					<TouchableOpacity style = {{
							width:50,
							paddingLeft:20,
							justifyContent : 'center'
						}}
					>
						<Image
							source={icons.arrow}
							resizeMode = 'contain'
							style = {{
								width:30,
								height:30
							}}
						/>

					</TouchableOpacity>

					<View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
						<View
							style = {{
								width : '70%',
								height:'100%',
								alignItems : 'center',
								justifyContent : 'center',
								borderRadius : 20,
								backgroundColor:'lightgray'

							}}
						>
							<Text>locationn</Text>
						</View>
					</View>
					<TouchableOpacity style = {{
							width : 50,
							paddingLeft  : 20,
							justifyContent : 'center'
						}}
						onPress={() => logout()}
					>
						<Image
							source={icons.bag}
							resizeMode = 'contain'
							style = {{
								width : 30,
								height:30
							}}
						/>

					</TouchableOpacity>
				</View>
			)
	}

	function renderMainCategory(){
		const renderItem = ({item}) => {
			return(
				<TouchableOpacity 
					style = {{ 
						padding:10,
						paddingBottom:10,
						backgroundColor :(selectedCategory?.id == item.id) ? 'orange' : 'white',
						borderRadius : 35,
						alignItems:'center',
						justifyContent : 'center',
						marginRight : 10
					}}
					 onPress={() => onSelectCategory(item)}
				>
					
					 <View style = {{
						width:50,
						height : 50,
						borderRadius:25,
						alignItems :'center',
						backgroundColor : (selectedCategory?.id == item.id) ? 'white' : 'lightGray'
						}}
					>
						<Image
							source={item.icon}
							resizeMode = 'contain'
							style = {{
								width : 40,
								height : 40

							}}
						/>
					</View>

					<Text style = {{
						marginTop : 20,
						color: (selectedCategory?.id == item.id) ? 'white' : 'black',
						fontSize:20
					}}
					>
						{item.name}
					</Text>

				</TouchableOpacity>
				)
		}
		return (
			<View style  = {{padding : 20}}>
				<Text style = {{fontSize:40 }}>Main</Text>
				<Text style = {{fontSize:40 }}>Categories</Text>

				<FlatList
					data = {categoryData}
					horizontal
					showsHorizontalScrollIndicator  = {false}
					keyExtractor ={itm =>`${itm.id}`}
					renderItem = {renderItem}
					contentContainerStyle = {{paddingVertical:20}}
				/>
			</View>
		)
	}

function renderRestaurantList(){
		const renderItem = ({item})=>(
			<TouchableOpacity
				style = {{marginBottom:10}}
				onPress={()=>navigation.navigate("Restaurant",(
					item
					// currentLocation	
			))}

			>
				<View>
					 <Image
						source={item.picture}
						resizeMode = "cover"
						style = {{
							width : '100%',
							height : 200,
							borderRadius:20
						}} 
					/> 
					<View style={{
						position:'absolute',
						bottom:0,
						height:50,
						width:100,
						backgroundColor:'white',
						borderTopRightRadius:20,
						borderBottomLeftRadius:20,
						alignItems:'center',
						justifyContent:'center'
					}}
					>
						<Text style={{fontSize:20}}>{item.duration}</Text>
					</View>					
				</View>
				<Text style={{fontSize:20}}>{item.name}</Text>
				<View
				style={{
					marginTop:20,
					flexDirection:'row'
				}}
				>
					<Image
					source={icons.star}
					style={{
						height:25,
						width:25,
						marginRight:10
					}}
					/>
					<Text style={{fontSize:20}}>{item.rating}</Text>
					<View style={{
						flexDirection:'row',
						marginLeft:20
					}}
					>

{
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{fontSize:20 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ fontSize:20, color: 'lightgray' }}> . </Text>
                                    </View>
                                )
                            })
                        }

					</View>

				</View>

			</TouchableOpacity>
			)
		
	return(
		<FlatList
			data = {restaurants} 
			keyExtractor={item => `${item.id}`}
	 		renderItem = {renderItem}
		 	contentContainerStyle={{
		 		paddingHorizontal:5,
		 		paddingBottom:10

	 		}}
		 />

	)
}


return(
		<SafeAreaView style={styles.container} >
			{renderHeader()}
			{renderMainCategory()}
			{renderRestaurantList()}
		</SafeAreaView>

	)
}



const styles = StyleSheet.create({
	container: { 
	  flex: 1,
	  backgroundColor:'white',
	},
  });

export default Home;


