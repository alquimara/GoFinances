import Styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

interface PropsConatiner{
    color:string
}

export const Container = Styled.View<PropsConatiner>`
width: 100%;
background: ${({theme})=> theme.colors.shape};
flex-direction:row;
justify-content: space-between;
padding: 13px 24px;
border-radius: 5px;
border-left-width:5px;
border-left-color:${({color})=> color};
margin-bottom: 8px;


`;
export const Title = Styled.Text`
font-family:${({theme})=> theme.fonts.regular};
font-size: ${RFValue(15)}px

`;
export const Amount = Styled.Text`
font-family:${({theme})=> theme.fonts.bold};
font-size: ${RFValue(15)}px

`;