import React, { useContext } from 'react'
import { Container,Header,TitleWrapper,Title,SignTitle,Footer, FooterWrapper } from './style'
import GoogleSvg from '../../assents/google.svg'
import LogoSvg from '../../assents/Logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { SignInButton } from '../../components/SignInSocialButton'
import { AuthContext } from '../../Context/AuthContext'
import { useAuth } from '../../Hooks/Auth'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const SignIn = () => {
    const {signInWithGoogle} = useAuth();
    const storange = AsyncStorage.getItem('@goFinances:user')
    console.log(storange)
    
    async function handleSignInWithGoogle(){
        try {
            await signInWithGoogle();
        } catch (error) {
            Alert.alert('não foi possivel conectar a conta google')
            console.log(error + 'signIn')
            
        }
    }
  return (
    <Container>
        <Header>
            <TitleWrapper>
                <LogoSvg width={RFValue(120)} height={RFValue(68)}/>
                <Title>
                    Controle suas finanças de forma simples
                </Title>
            </TitleWrapper>
            <SignTitle>
                Faça o Login 
                com sua conta 
               
            </SignTitle>
        </Header>
        <Footer>
            <FooterWrapper>
                <SignInButton title={'Entrar com o Google'} svg={GoogleSvg} onPress={handleSignInWithGoogle}/>

            </FooterWrapper>
        </Footer>

    </Container>
  )
}

