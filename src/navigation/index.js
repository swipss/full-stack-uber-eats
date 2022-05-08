import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";
import DishDetailScreen from "../screens/DishDetailScreen";
import BasketScreen from "../screens/BasketScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'

import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
            
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }} screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{
                tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />
            }}/>
            <Tab.Screen name="Orders" component={OrdersStackNavigator} options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} />
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />
            }}/>
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={HomeScreen}/>
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="Dish" component={DishDetailScreen}/>
            <HomeStack.Screen name="Basket" component={BasketScreen}/>

        </HomeStack.Navigator>
    )
}

const OrdersStack = createNativeStackNavigator()


const OrdersStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Orders" component={OrdersScreen}/>
            <HomeStack.Screen name="Order" component={OrderDetailsScreen}/>
            

        </HomeStack.Navigator>
    )
}

export default RootNavigator;