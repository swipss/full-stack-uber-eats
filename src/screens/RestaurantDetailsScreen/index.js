
import {View, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons'
import ListItem from '../../components/ListItem'
import Header from './Header'
import { styles } from './styles'

const restaurant = restaurants[1]

const RestaurantDetailsScreen = () => {
    return(
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>} 
            data={restaurant.dishes}
            renderItem={({ item }) => <ListItem dish={item} />}
            />
            <Ionicons name='arrow-back-circle' size={45} color='white' 
            style={styles.iconContainer}/>
        </View>
    )
}



export default RestaurantDetailsScreen;
