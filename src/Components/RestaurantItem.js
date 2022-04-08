import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { elevation } from "../common/styles";
import { AntDesign } from "@expo/vector-icons";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={[styles.container, elevation]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View>
        <Text style={styles.name} numberOfLines={2}>
          {restaurant.name}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}> Price:</Text>
            <Text style={[styles.text, { color: "green" }]}>
              {" "}
              {restaurant.price}{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}> Rating: {restaurant.rating} </Text>
            <AntDesign name="star" size={16} color="gold" />
          </View>
          <Text style={styles.text}>Phone: {restaurant.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginVertical: 10,
    borderRadius: 150,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 5,
    alignSelf: "center",
  },
  name: {
    letterSpacing: 1,
    marginVertical: 5,
    width: 180,
    fontSize: 20,
    fontFamily: "MagilioRegular",
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    fontFamily: "MagilioRegular",
    letterSpacing: 1,
  },
});
