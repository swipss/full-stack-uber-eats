import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Dish } from '../../models'
import { ActivityIndicator } from 'react-native-paper'
import { useBasketContext } from '../../contexts/BasketContext'


const DishDetailScreen = () => {

    const {addDishToBasket} = useBasketContext()

    const [dish, setDish] = useState(null)

    const navigation = useNavigation()

    const [quantity, setQuantity] = useState(1)

    const route = useRoute()

    const id = route.params?.id

    useEffect(() => {
        if (id) {
            DataStore.query(Dish, id).then(setDish)
        }
    }, [id])

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const onPlus = () => {
        setQuantity(quantity + 1)

    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2)
    }

    if (!dish) {
        return <ActivityIndicator size={"large"} color={'black'} style={{paddingTop: 50}}/>
    }

    const onAddToBasket = async () => {
        await addDishToBasket(dish, quantity)
        navigation.goBack()
    }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

    <View style={styles.row}>
        <AntDesign name='minuscircleo' size={60} color='black' onPress={onMinus}/>
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign name='pluscircleo' size={60} color='black' onPress={onPlus}/>
    </View>

    <Pressable onPress={onAddToBasket} style={styles.button}>
        <Text style={styles.buttonText}> Add {quantity} to basket &#8226; ${getTotal()}</Text>
    </Pressable>

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
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10
    },
    description: {
        color: 'grey'
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
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
})

export default DishDetailScreen