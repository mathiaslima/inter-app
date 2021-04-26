import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './assets/colors';
import Main from './src';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    interIcons: require("./assets/fonts/inter-icons/font.ttf"),
  });

  if (!fontsLoaded)
    return (
      <>
        <AppLoading />
      </>
    );

  return (
    <>
      <StatusBar style="light" barStyle="light-content" backgroundColor={colors.secondary} />
      <Main />
    </>
  );
}

