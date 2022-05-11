
import { useState, useEffect } from 'react'
import {View, FlatList, ActivityIndicator} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ListItem from '../../components/ListItem'
import Header from './Header'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Restaurant, Dish } from '../../models'


const RestaurantDetailsScreen = () => {

    const [restaurant, setRestaurant] = useState(null)
    const [dishes, setDishes] = useState([])

    const navigation = useNavigation()
    const route = useRoute()

    const id = route.params?.id



    useEffect(() => {
        if (!id) {
            return
        }
        DataStore.query(Restaurant, id).then(setRestaurant)

        DataStore.query(Dish, (dish) => dish.restaurantID('eq', id)).then(setDishes)
    }, [])

    // console.warn(id)
    if (!restaurant) {
        return <ActivityIndicator size={"large"} color={'black'} style={{paddingTop: 50}}/>
    }

    return(
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>} 
            data={dishes}
            renderItem={({ item }) => <ListItem dish={item} />}
            keyExtractor={(item) => item.name}
            />
            <Ionicons name='arrow-back-circle' size={45} color='white' 
            style={styles.iconContainer} onPress={() => navigation.goBack()}/>
        </View>
    )
}



export default RestaurantDetailsScreen;
