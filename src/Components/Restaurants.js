import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";
const Restaurants = ({ term }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants({ term });
  }, [term]);
  if (loading) {
    return <ActivityIndicator size="large" color="blak" />;
  }
  if (error) {
    return { error };
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flex: 1,
  },
  text: {
    fontFamily: "MagilioRegular",
    fontSize: 20,
  },
});
