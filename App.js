import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./src/Components/Header";
import Search from "./src/Components/Search";
import React, { useState } from "react";
import Categories from "./src/Components/Categories";
import Restaurants from "./src/Components/Restaurants";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    MagilioRegular: require("./src/assets/fonts/MagilioRegular-Yzv2O.ttf"),
  });

  const [term, setTerm] = useState("Burger");
  const commonCategories = [
    { name: "Burger", imageURL: require("./src/assets/images/burger.png") },
    { name: "Pizza", imageURL: require("./src/assets/images/pizza.png") },
    { name: "Desert", imageURL: require("./src/assets/images/cake.png") },
    { name: "Pasta", imageURL: require("./src/assets/images/pasta.png") },
    { name: "Steak", imageURL: require("./src/assets/images/steak.png") },
    { name: "Drinks", imageURL: require("./src/assets/images/smoothies.png") },
  ];
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#83ce89" }}>
      <View style={styles.container}>
        <Header />
        <Search setTerm={setTerm} />
        <Categories
          categories={commonCategories}
          setTerm={setTerm}
          term={term}
        />
        <Restaurants term={term} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83ce89",
  },
});
