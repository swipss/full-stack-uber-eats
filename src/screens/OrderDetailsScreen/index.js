import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import ListItem from '../../components/ListItem'
import BasketDishItem from '../../components/BasketDishItem'
import { useOrderContext } from '../../contexts/OrderContext'
import { useRoute } from '@react-navigation/native'

const order = orders[0]

const OrderDetailsScreenHeader = ({order}) => {

    

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
    const {getOrder} = useOrderContext()
    const [orderDishItem, setOrderDishItem] = useState()
    const [order, setOrder] = useState()
    const route = useRoute()
    const id = route.params?.id

    useEffect(() => {
        getOrder(id).then(setOrder)
    }, [])

    if (!order) {
        return <ActivityIndicator size={24} color={'black'} />
    }
    return (
        <FlatList
        ListHeaderComponent={() => <OrderDetailsScreenHeader order={order}/>}
        data={order.dishes}
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