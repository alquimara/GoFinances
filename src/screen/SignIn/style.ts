import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native'



export const Container = Styled.View`
flex: 1;

`;
export const Header= Styled.View`
width: 100%;
height: 70%;
background-color:${({theme})=> theme.colors.primary};
justify-content:flex-end;
align-items:center;

`;
export const TitleWrapper = Styled.View`
align-items:center;
`;
export const Title = Styled.Text`
font-family:${({theme})=>theme.fonts.medium};
color:${({theme})=> theme.colors.shape};
font-size:${RFValue(25)}px;
text-align:center;
margin-top:45px;
`;
export const SignTitle = Styled.Text`
font-family:${({theme})=>theme.fonts.medium};
color:${({theme})=> theme.colors.shape};
font-size:${RFValue(16)}px;
text-align:center;
margin-top:80px;
margin-bottom:67px;

`;
export const Footer = Styled.View`
width: 100%;
height: 30%;
background-color:${({theme})=> theme.colors.secondary};


`;
export const FooterWrapper= Styled.View`
margin-top:${RFValue(40)}px;
padding: 0 32px;
justify-content: space-between;


`;
