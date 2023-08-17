
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screen/SignIn';
import { AuthContext } from './src/Context/AuthContext';
import { AuthProvider, useAuth } from './src/Hooks/Auth';
import { Routes } from './src/routes';
SplashScreen.preventAutoHideAsync();


export default function App() {
 
 
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  const {storangeLoading} = useAuth()
  if (__DEV__) {
    require('react-devtools');
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
   
          <AuthProvider>
          <Routes/>
          </AuthProvider>
      </View>

    </ThemeProvider>
  )
}
