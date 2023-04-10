
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground,FlatList,TouchableOpacity,LogBox,YellowBox} from 'react-native';
import Restaurant  from './Pages/Restaurant';
import Home from './Pages/Home';
import OrderDelevery  from './Pages/OrderDelevery';
import CheckoutForm  from './Pages/CheckoutForm';
import MyCart  from './Pages/MyCart';

import Platcreate  from './AdminPages/Platcreate';
import UpdateDelete  from './AdminPages/UpdateDelete';
import AddRestaurantInfo from './AdminPages/AddRestaurantInfo';
// import MultiSelectExample from './AdminPages/MultiSelectExample'
import index from './Pages/index';


import Tabs from './Components/Navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import {AuthProvider} from './Contexts/AuthContext'
// import { Provider } from 'react-redux';
// import store from './store';
// import {Home} from './Pages'

const Stack = createStackNavigator();

const App = (props)=> {

	// Ignore log notification by message:
	// LogBox.ignoreLogs(['Warning: ...']);

	// Ignore all log notifications:
	// LogBox.ignoreAllLogs();
	LogBox.ignoreLogs(['Remote debugger']);
	// YellowBox.ignoreWarnings(['Remote debugger']);

  return (
  	<NavigationContainer>
	    <Stack.Navigator>
	      <Stack.Screen name="Home" component={Tabs} />
	      <Stack.Screen name="Restaurant" component={Restaurant} />
	      <Stack.Screen name="OrderDelevery" component={OrderDelevery} />
		  <Stack.Screen name="CheckoutForm" component={CheckoutForm} />
		  <Stack.Screen name="MyCart" component={MyCart} />
		  <Stack.Screen name="index" component={index} />
		  <Stack.Screen name="Platcreate" component={Platcreate} />
		  	<Stack.Screen name="UpdateDelete" component={UpdateDelete} />
		  {/* <Stack.Screen name="MultiSelectExample" component={MultiSelectExample} /> */}
		  <Stack.Screen name="AddRestaurantInfo" component={AddRestaurantInfo} /> 



	    </Stack.Navigator>
    </NavigationContainer>


    
  );
}

export default App;
