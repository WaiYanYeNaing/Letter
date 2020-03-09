import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";

import Login from "./screens/Login";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import Write from "./screens/Write";
import Found from "./screens/Found";
import Manual from "./screens/Manual";

const Stack = createStackNavigator();

const customTextProps = {
  style: {
    fontFamily: "notoSerif-regular"
  }
};

const getFonts = () =>
  Font.loadAsync({
    "notoSerif-bold": require("./assets/fonts/NotoSerif-Bold.ttf"),
    "notoSerif-regular": require("./assets/fonts/NotoSerif-Regular.ttf")
  });

function App() {
  const [fontloaded, setFontloaded] = useState(false);

  setCustomText(customTextProps);
  if (fontloaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#B497D6" },
              headerTitleStyle: {
                fontFamily: "notoSerif-bold"
              }
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Letter",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#B497D6" },
              headerTitleStyle: {
                fontFamily: "notoSerif-bold"
              }
            }}
          />
          <Stack.Screen
            name="Write"
            component={Write}
            options={{
              title: "Write Your Letter",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#B497D6" },
              headerTitleStyle: {
                fontFamily: "notoSerif-bold"
              }
            }}
          />
          <Stack.Screen
            name="Found"
            component={Found}
            options={{
              title: "Matches Found",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#B497D6" },
              headerTitleStyle: {
                fontFamily: "notoSerif-bold"
              }
            }}
          />
          <Stack.Screen
            name="Manual"
            component={Manual}
            options={{
              title: "Manual Match",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#B497D6" },
              headerTitleStyle: {
                fontFamily: "notoSerif-bold"
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontloaded(true)} />
    );
  }
}

export default App;
