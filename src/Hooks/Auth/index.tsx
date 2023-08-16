

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';

interface User{
    id:string;
    name:string;
    email:string;
    photo?:string
}
interface AuthorizationProps{
    params:{
        access_token:string;
    },
    type: string;
    
}
interface AuthPrividerProps{
    user:User;
    signInWithGoogle():Promise<void>;
    signOut():Promise<void>;
    storangeLoading: boolean;
}

interface AuthProps{
    children:ReactNode
}
const {CLIENT_ID}= process.env
const {REDIRECT_URI}= process.env
const storangeKey= '@goFinances:user'

export const AuthContext = createContext({} as AuthPrividerProps);



function AuthProvider({children}:AuthProps){
    const[user,setUser]=useState<User>({} as User)
    const [storangeLoading,setStorangeLoading]=useState(true)

    async function signInWithGoogle(){
      try {
        const RESPONSE_TYPE='token';
        const SCOPE=encodeURI('profile email');
        const authUrl=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationProps
        if(type === 'success'){
            const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
            const userinfo = await response.json();
            const UserLoget = {
            id:userinfo.id,
            name:userinfo.given_name,
            email:userinfo.email,
            photo: userinfo.picture
            }
            setUser(UserLoget)
            await AsyncStorage.setItem(storangeKey,JSON.stringify(UserLoget))
        }
     
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }
    async function signOut(){
        setUser({} as User)
        await AsyncStorage.removeItem(storangeKey)
    }

    useEffect(()=>{
        async function loadStorageData(){
            const userDateStorage = await AsyncStorage.getItem(storangeKey)
            if(userDateStorage){
                const userLogget = JSON.parse(userDateStorage) as User
                setUser(userLogget)
            }
            setStorangeLoading(false)
        }
        loadStorageData()
    },[])
    return(
    <AuthContext.Provider value={{user, signInWithGoogle,signOut,storangeLoading}}>
        {children}
    </AuthContext.Provider>

    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}


export{AuthProvider, useAuth}


