import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.continer}>
      <Text style={styles.lightHeader}>Grab Your</Text>
      <Text style={styles.boldHeader}>Delicious Meal!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  continer: {
    marginLeft: 15,
  },
  lightHeader: {
    fontSize: 25,
    fontFamily: "MagilioRegular",
    fontWeight: "100",
  },
  boldHeader: {
    fontSize: 35,
    fontFamily: "MagilioRegular",
    fontWeight: "normal",
  },
});
