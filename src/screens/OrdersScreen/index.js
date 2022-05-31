import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListItem'
import { useOrderContext } from '../../contexts/OrderContext'

const OrdersScreen = () => {
  const {orders} = useOrderContext()
  console.log(orders)

  return (
    <View style={{flex: 1, width: '100%'}}>
        <FlatList 
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item}/>}
        />
    </View>
  )
}

export default OrdersScreen