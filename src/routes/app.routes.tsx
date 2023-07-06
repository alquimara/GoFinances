import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Dashboard } from '../screen/Dashboard';
import { Register } from '../screen/Register';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Resume } from '../screen/Resume';


const { Navigator, Screen } = createBottomTabNavigator();


export const AppRoutes = () => {
  const theme = useTheme();
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarLabelPosition: 'beside-icon',
      tabBarStyle: {
        height: 59,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,


      }
    }}>
      <Screen name='Home' component={Dashboard} options={{
        tabBarIcon: (({ color, size }) => <Feather name='home' size={size} color={color} />)
      }} />
      <Screen name='Adicionar' component={Register} options={{
        tabBarIcon: (({ color, size }) => <Feather name='plus-circle' size={size} color={color} />)
      }} />
      <Screen name='Resumo' component={Resume} options={{
        tabBarIcon: (({ color, size }) => <Feather name='pie-chart' size={size} color={color} />)
      }} />
    </Navigator >
  )
}
