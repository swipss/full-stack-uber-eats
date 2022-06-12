import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Order")}
      style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{
          width: "100%",
          width: 75,
          height: 75,
          borderRadius: 10,
          marginRight: 10,
        }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>4 items &#8226; $38.23</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
