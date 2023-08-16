
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native'




export const ButtonSign= Styled(TouchableOpacity)`
height: ${RFValue(56)}px;
background-color: ${({theme})=> theme.colors.shape};
border-radius: 5px;
align-items: center;
flex-direction: row;
margin-bottom:16px;

`;
export const ImagemContainer= Styled.View`
height: 100%;
justify-content:center;
align-items:center;
padding: ${RFValue(16)}px;
border-color:${({theme})=> theme.colors.background}
border-right-width: 1px;

`;
export const TextButton =Styled.Text`
flex:1;
text-align:center;
margin-right: 30px;
font-family:${({theme})=> theme.fonts.medium}
font-size:${RFValue(14)}px;


`;
