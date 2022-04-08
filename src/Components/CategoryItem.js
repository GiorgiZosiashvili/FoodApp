import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { elevation } from "../common/styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CategoryItem = ({ name, imageURL, index, active, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          elevation,
          index === 0 ? { marginLeft: 15 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(241,186,87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageURL} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 115,
    borderRadius: 50,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 38,
    height: 38,
  },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    marginBottom: 5,
  },
  header: {
    fontWeight: "500",
    fontFamily: "MagilioRegular",
    fontSize: 17,
  },
});
