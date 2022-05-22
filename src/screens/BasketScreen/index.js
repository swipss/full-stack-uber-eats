import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import BasketDishItem from '../../components/BasketDishItem'
import { useBasketContext } from '../../contexts/BasketContext'



const BasketScreen = () => {

    const {restaurant, basketDishes, totalPrice} = useBasketContext()

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{restaurant?.name}</Text>

        <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 20}}>Your items</Text>

        <FlatList 
        data={basketDishes}
        renderItem={({item}) => <BasketDishItem basketDish={item} />}
        />

      <View style={styles.separator} />

    <View style={styles.button}>
        <Text style={styles.buttonText}>Create order &#8226; ${totalPrice.toFixed(2)}</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 30,
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10
    },
    description: {
        color: 'grey'
    },
    nameText: {
        fontWeight: '600',
    },
    priceText: {
        marginLeft: 'auto',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    quantity: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 7,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
})

export default BasketScreen