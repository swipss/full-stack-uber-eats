import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import OrdersScreen from './src/screens/OrdersScreen';
import BasketScreen from './src/screens/BasketScreen';
import DishDetailScreen from './src/screens/DishDetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrdersScreen /> */}
      <OrderDetailsScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
