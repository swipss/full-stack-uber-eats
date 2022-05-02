
import {View, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons'
import ListItem from '../../components/ListItem'
import Header from './Header'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const restaurant = restaurants[1]

const RestaurantDetailsScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()

    const id = route.params?.id

    console.warn(id)

    return(
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>} 
            data={restaurant.dishes}
            renderItem={({ item }) => <ListItem dish={item} />}
            keyExtractor={(item) => item.name}
            />
            <Ionicons name='arrow-back-circle' size={45} color='white' 
            style={styles.iconContainer} onPress={() => navigation.goBack()}/>
        </View>
    )
}



export default RestaurantDetailsScreen;
