/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";
import InteractiveTextInput from "./lib/InteractiveTextInput";

const App = () => {
  return (
    <SafeAreaView
      style={{
        height: 300,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <InteractiveTextInput />
      <InteractiveTextInput />
      <InteractiveTextInput />
    </SafeAreaView>
  );
};
export default App;
