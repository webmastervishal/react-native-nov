import { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies } from "../components/action";

const Currency = ({ route }) => {
  const { currencies } = useSelector((state) => state.currency);
  const [value, setValue] = useState("");
  console.log("currencies", currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={Styles.itemWrapper}>
        <Text>{item.symbol + item.name}</Text>
        <Text>{item.rate}</Text>
        <Text>{(item.rate * value).toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={Styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <FlatList
        data={currencies}
        keyExtractor={(item) => item.symbol}
        renderItem={renderItem}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 320,
    backgroundColor: "#ddd",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});

export default Currency;
