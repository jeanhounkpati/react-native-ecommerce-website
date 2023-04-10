
import React ,{useState} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,SafeAreaView,Animated} from 'react-native';
// import Animated from 'react-native-reanimated';
import icons from '../Components/Constants/icons';
import Home from './Home'
import CheckoutForm from './CheckoutForm'


const Restaurant = ({route,navigation})=> {
	const [restaurant,setRestaurant] = React.useState(null);
	const [orderItems, setOrderItems] = React.useState([]);

	// const [currentLocation,setCurrentLocation] = React.useState(null);

	React.useEffect(()=>{
		let item = route.params;
		setRestaurant(item)
		// setCurrentLocation(currentLocation)

	})


	function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }


	function renderHeader(){
			return (
				<View>
					<View style = {{ flexDirection:'row',height : 50}}>
						<TouchableOpacity style = {{
								width:50,
								paddingLeft:20,
								justifyContent : 'center'
							}}
							onPress={()=>navigation.goBack()}

						>
							<Image
								source={icons.arrow}
								resizeMode = 'contain'
								style = {{
									width:30,
									height:30,
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
								<Text>{restaurant?.name}</Text>
							</View>
						</View>
						<TouchableOpacity style = {{
								width : 50,
								paddingLeft  : 20,
								justifyContent : 'center'
							}}
						>
							<Image
								source={icons.justifier}
								resizeMode = 'contain'
								style = {{
									width : 30,
									height:30
								}}
							/>
	
						</TouchableOpacity>
					</View>
				</View>		
		)
	}
	function renderFoodInfo(){
		return(
			
				<Animated.ScrollView
				horizontal
				pagingEnabled
				ScrollEventThrottle={1}
				snapToAlignment = 'center'
				showsHorizontalScrollIndicator  = {false}
				// onScroll
				>
					{
						restaurant?.menu.map((item,index) => (
							<View
								key = {`menu-${index}`}
								style = {{alignItems:'center'}}
							>

								<View style ={{ height:250}}>


									<Image
									source = {item.picture}
									resizeMode = 'cover'
									style = {{
										width:400,
										height:'100%'
									}}
									
									/>									
							<View style = {{
								position:'absolute',
								bottom:-20,
								width:500,
								height:50,
								justifyContent:'center',
								flexDirection:'row'
							}}
							>
									<TouchableOpacity
									style={{
										width:30,
										backgroundColor:'white',
										justifyContent:'center',
										borderTopLeftRadius:20,
										borderBottomLeftRadius:20
									}}
									onPress={() => editOrder("-", item.menuId, item.price)}

									>
										<Text style={{fontSize:25}}>-</Text>
									</TouchableOpacity>
										<View style = {{
											width:40,
											backgroundColor:'white',
											alignItems:'center',
											justifyContent:'center'

										}}
										>
											<Text style={{fontSize:20}}>{getOrderQty(item.menuId)}</Text>
										</View>
										<TouchableOpacity style={{
											width:30,
											backgroundColor:'white',
											alignItems:'center',
											justifyContent:'center',
											borderTopRightRadius:20,
											borderBottomRightRadius:20
											
										}}
										onPress={() => editOrder("+", item.menuId, item.price)}

										>
											<Text style = {{fontSize:25}}>+</Text>
										</TouchableOpacity>
							</View>							
							<View style = {{
								width:500,
								alignItems:'center',
								marginTop:15,
								paddingHorizontal:10

							}}
							>
								<Text style={{
									marginVertical:5,
									textAlign:'center',
									fontSize:20,
								
									}}
									>
									{item.name} - {item.price.toFixed(2)}
								</Text>
								<Text
								style={{
									fontSize:10
								}}
								>
									{item.description}
								</Text>

							</View>
							<View styles={{
								flexDirection:'row',
								marginTop:10
							}}
							>
								<Image
								source={icons.fire}
								style={{
									width:20,
									height:20,
									marginRight:10 
								}}
								/>
								<Text style = {{fontSize:10,color:'green'}}>{item.calories.toFixed(2)}cal</Text>

							</View>
								</View>
							</View>
						))

					}

				</Animated.ScrollView>



		)
	}

	function renderOrder(){
		return(
			<View>
				{/* {
				renderDots()
				} */}
				<View style={{
					backgroundColor:'white',
					borderTopLeftRadius:40,
					borderTopRightRadius:40
				}}
				>
					<View style ={{
						flexDirection:'row',
						justifyContent:'space-between',
						paddingVertical:10,
						paddingHorizontal:10,
						borderBottomColor:'blue',
						borderBottomWidth:1

					}}
					>
						<Text style={{fontSize:20}}>{getBasketItemCount()} items in Cart</Text>
						<Text style={{fontSize:20}}>${sumOrder()}</Text>						 
					</View>

					<View style={{
						flexDirection:'row',
						justifyContent:'space-between',
						paddingVertical:10,
						paddingHorizontal:10
					}}
					>
						<View style={{flexDirection:'row'}}
						>

							<Image
							source={icons.pin}
							resizeMode='contain'
							style={{
								width:20,
								height:20
							}}
							/>
							<Text style={{marginLeft:10,fontSize:20}}>Location</Text>
						</View>
						<TouchableOpacity style={{flexDirection:'row'}}
						onPress={()=>navigation.navigate("MyCart")}						
						>
						
							<Image
							source={icons.pin}
							resizeMode='contain'
							style={{
								width:20,
								height:20
								
							}}
							/>
							<Text style={{marginLeft:20}}>8888</Text>

						</TouchableOpacity>
					</View>
					<View style={{
						padding:10,
						alignItems:'center',
						justifyContent:'center'
					}}
					>
						<TouchableOpacity
						style={{
							width:400,
							padding:10,
							backgroundColor:'orange',
							alignItems:'center',
							borderRadius:15

						}}
						onPress={()=>navigation.navigate("CheckoutForm")}
						

						>
							<Text style={{color:'white',fontSize:20}}>Order</Text>

						</TouchableOpacity>

					</View>

				</View>
			</View>
		)
	}

	
return(
	<SafeAreaView style={styles.container} >
	{renderHeader()}
	{renderFoodInfo()} 
	{renderOrder()} 
	</SafeAreaView>
	

)
}


const styles = StyleSheet.create({
	container: { 
	  flex: 1,
	  backgroundColor:'white',
	},
  });

 export default Restaurant;
