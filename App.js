import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  /*
  todos = [{
    id: 1,
    todo: "Learn React JS"
  },{
    id: 2,
    todo: "learn node js"
  }]
  */

  const handleTodos = () => {
    setTodos([...todos, { id: todos.length + 1, todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    console.log("id", id);
    setTodos(todos.filter((todo) => todo.id !== id)); // 2 !== 2
  };

  const renderItems = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.todo}</Text>
      <AntDesign
        name="delete"
        size={24}
        color="black"
        onPress={() => handleDeleteTodo(item.id)}
      />
    </View>
  );

  // console.log("todos", todos);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Application</Text>

      <View style={styles.todoWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button title="Add" onPress={handleTodos} />
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={todos}
          renderItem={renderItems}
          keyExtractor={(todo) => todo.id}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

{
  /* <div className="container"></div> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    flex: 1,
  },
  todoWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  listWrapper: {
    backgroundColor: "#eee",
    width: 360,
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
