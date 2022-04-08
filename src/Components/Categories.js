import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories, setTerm, term }) => {
  return (
    <View>
      <FlatList
        style={{}}
        keyExtractor={(category) => category.name}
        horizontal
        showsHorizontalScrollIndicator="false"
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              onPress={() => setTerm(item.name)}
              name={item.name}
              imageURL={item.imageURL}
              index={index}
              active={item.name === term}
            />
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
