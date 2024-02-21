import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/Components/ScreenWelcome/Welcome";
import Login from "./src/Components/ScreenWelcome/Login";
import Home from "./src/Components/ScreenWelcome/Home";
import Dangky from "./src/Components/ScreenWelcome/Dangky";
import Dangky2 from "./src/Components/ScreenWelcome/Dangky2";
import KichhoatTK from "./src/Components/ScreenWelcome/KichhoatTK";
import Quenmatkhau from "./src/Components/ScreenWelcome/Quenmatkhau";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dangky" component={Dangky} />
        <Stack.Screen name="Dangky2" component={Dangky2} />
        <Stack.Screen name="KichhoatTK" component={KichhoatTK} />
        <Stack.Screen name="Quenmatkhau" component={Quenmatkhau} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

