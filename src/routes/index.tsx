import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { Auth } from './auth.routes'
import { useAuth } from '../Hooks/Auth'
import { AppRoutes } from './app.routes'



export const Routes = () => {

  const {user}= useAuth();
 
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes/> : <Auth/>}
    </NavigationContainer>
  )
}
