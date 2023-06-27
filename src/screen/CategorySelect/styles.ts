import { RFValue } from "react-native-responsive-fontsize";
import Styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

interface PropsCategory {
  isActive: boolean;
}


export const Container = Styled.View`
flex:1;
background-color:${({ theme }) => theme.colors.background};
`;
export const Header = Styled.View`
width:100%;
height:${RFValue(113)}px;
background-color:${({ theme }) => theme.colors.primary}
align-items:center;
justify-content:flex-end;
padding-bottom: 19px;
`;
export const Title = Styled.Text`
font-family:${({ theme }) => theme.fonts.regular}
font-size:${RFValue(18)}px;
color:${({ theme }) => theme.colors.shape};
`;
export const Category = Styled.TouchableOpacity<PropsCategory>`
width: 100%;
padding: ${RFValue(15)}px;
flex-direction: row;
align-items: center;
background-color:${({ isActive, theme }) => isActive ? theme.colors.secondary_light : theme.colors.background}

`;
export const Icon = Styled(AntDesign)`
font-size:${RFValue(20)}px;
margin-right:16px;

`;
export const Name = Styled.Text`
font-family:${({ theme }) => theme.fonts.regular}
font-size:${RFValue(14)}px;
`;
export const Separador = Styled.View`
width: 100%;
height: 1px;
background-color:${({ theme }) => theme.colors.text};
`;
export const Footer = Styled.View`
padding: 24px;
`;