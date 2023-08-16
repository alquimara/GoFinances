import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screen/SignIn'
const {Navigator, Screen} = createStackNavigator();

export const Auth = () => {
 
  return (
    <Navigator screenOptions={{headerShown:false}} >
        <Screen name="SignIn" component={SignIn}/>
    </Navigator>
  )
}
