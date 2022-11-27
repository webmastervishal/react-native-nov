import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import Home from "./src/screen/Home";
import Currency from "./src/screen/Currency";
import store from "./src/store/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Currency" component={Currency} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
