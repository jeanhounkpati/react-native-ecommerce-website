import React from 'react';
import {View,Text,Image} from 'react-native';
import Search from '../../Pages/Search';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';
import Restaurant from '../../Pages/Restaurant';
import index from '../../Pages/index';

import CheckoutForm from '../../Pages/CheckoutForm';
import MyCart from '../../Pages/MyCart';

// import MultiSelectExample from '../../AdminPages/AddRestaurantinfo'
import AddRestaurantInfo from '../../AdminPages/AddRestaurantInfo'
import Platcreate from '../../AdminPages/Platcreate'





import icons from '../Constants/icons';
import {createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const Tabs=() => {
	
		return (
			<Tab.Navigator
				tabBarOptions = {{
					showLabel :false,
				}}
			>
				<Tab.Screen
				name =  'Home'
				component = {Home}
				options={{
					tabBarIcon:({focused}) =>(
						<Image
							source={icons.accueil}
							resizeMode = 'contain'
							style={{
								width:25,
								height:25,
								// tinColor:focused?'blue':'yellow'
							}}
						/>

					)
				}}
				/>


				<Tab.Screen
				name =  'search'
				component = {Restaurant}
				options={{
					tabBarIcon:({focused}) =>(
						<Image
							source={icons.search}
							resizeMode = 'contain'
							style={{
								width:25,
								height:25,
								// tincolor:focused?'blue':'yellow'
							}}
						/>

					)
				}}
				/>

				<Tab.Screen
				name =  'like'
				component = {CheckoutForm}
				options={{
					tabBarIcon:({focused}) =>(
						<Image
							source={icons.like}
							resizeMode = 'contain'
							style={{
								width:25,
								height:25,
								// tincolor:focused?'blue':'yellow'
							}}
						/>

					)
				}}
				/>


				<Tab.Screen
				name =  'user'
				component = {Platcreate}
				options={{
					tabBarIcon:({focused}) =>(
						<Image
							source={icons.user}
							resizeMode = 'contain'
							style={{
								width:25,
								height:25,
								// tincolor:focused?'blue':'yellow'
							}}
						/>

					)
				}}
				/>
			</Tab.Navigator>
			
		)
}

export default Tabs;
