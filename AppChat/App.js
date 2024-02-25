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
import Maxacthuc from "./src/Components/ScreenWelcome/Maxacthuc";
import XacthucMK from "./src/Components/ScreenWelcome/XacthucMK";
import TaoMK from "./src/Components/ScreenWelcome/TaoMK";

import TinNhan from "./src/Components/ScreenWelcome/TinNhan";
import DanhBa1 from "./src/Components/ScreenWelcome/DanhBa1";
import KhamPha from "./src/Components/ScreenWelcome/KhamPha";
import NhatKy from "./src/Components/ScreenWelcome/NhatKy";
import CaNhan from "./src/Components/ScreenWelcome/CaNhan";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TinNhan" component={TinNhan} />
        <Stack.Screen name="DanhBa1" component={DanhBa1} />
        <Stack.Screen name="KhamPha" component={KhamPha} />
        <Stack.Screen name="NhatKy" component={NhatKy} />
        <Stack.Screen name="CaNhan" component={CaNhan} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Dangky" component={Dangky} />
        <Stack.Screen name="Dangky2" component={Dangky2} />
        <Stack.Screen name="KichhoatTK" component={KichhoatTK} />
        <Stack.Screen name="Quenmatkhau" component={Quenmatkhau} />
        <Stack.Screen name="Maxacthuc" component={Maxacthuc} />
        <Stack.Screen name="XacthucMK" component={XacthucMK} />
        <Stack.Screen name="TaoMK" component={TaoMK} />

        {/* <Stack.Screen name="TinNhan" component={TinNhan} />
        <Stack.Screen name="DanhBa1" component={DanhBa1} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

