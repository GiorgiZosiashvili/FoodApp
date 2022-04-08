import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { elevation } from "../common/styles";

const Search = ({ setTerm }) => {
  const [input, setInput] = useState("");
  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };
  return (
    <View style={[styles.container, elevation]}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        onEndEditing={handleEndEditing}
        placeholder="Restourants, food"
        value={input}
        style={styles.search}
        onChangeText={(text) => {
          {
            setInput(text);
          }
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    padding: 10,
    width: 300,
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 200,
  },
  search: {
    marginTop: 5,
    fontSize: 18,
    marginLeft: 5,
    fontFamily: "MagilioRegular",
  },
});
