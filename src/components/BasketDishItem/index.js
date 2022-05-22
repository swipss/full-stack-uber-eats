import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, {useState} from 'react'


const BasketDishItem = ({ basketDish }) => {
    console.log(basketDish.name)
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>{basketDish.quantity}</Text>
            </View>
            <Text style={styles.nameText}>{basketDish.Dish.name}</Text>
            <Text style={styles.priceText}>${basketDish.Dish.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10
    },
    
    nameText: {
        fontWeight: '600',
    },
    priceText: {
        marginLeft: 'auto',
    },
    
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10
    },
    
    
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 7,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
})

export default BasketDishItem;