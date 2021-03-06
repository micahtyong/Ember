import React from "react";
import { AsyncStorage } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import "react-native-gesture-handler";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import AppContainer from "./AppContainer";

const glow = require("./assets/glow.png");
const loraFont = require('./assets/Lora-VariableFont_wght.ttf');

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([glow]),
    Font.loadAsync({
      'Lora': loraFont,
    }),
  ]);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <SafeAreaProvider>
          <AppLoading
            startAsync={loadResourcesAsync}
            onFinish={() => this.setState({ isLoaded: true })}
            onError={console.warn}
          />
        </SafeAreaProvider>
      );
    }

    return <AppContainer />;
  }
}
