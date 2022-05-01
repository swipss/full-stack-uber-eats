import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import ListItem from '../../components/ListItem'
import BasketDishItem from '../../components/BasketDishItem'

const order = orders[0]

const OrderDetailsScreenHeader = () => {
  return (
    <View>
      <View style={styles.page}>
            <Image source={{uri : order.Restaurant.image}} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>
                <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

                <Text style={styles.menuTitle}>Your order</Text>
            </View>
        </View>
    </View>
  )
}

const OrderDetails = () => {
    return (
        <FlatList
        ListHeaderComponent={OrderDetailsScreenHeader}
        data={restaurants[0].dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
        />
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5/3,
        resizeMode: 'cover',
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 15,

    },
    container: {
        margin: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        color: '#525252'
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.7,
        fontWeight: 'bold'
    },

})
export default OrderDetails