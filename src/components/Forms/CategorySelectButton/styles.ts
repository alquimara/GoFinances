import Styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";



export const Container = Styled(TouchableOpacity).attrs({
  activeOpacity: 0.5
})`
background-color:${({ theme }) => theme.colors.shape}
flex-direction:row;
justify-content:space-between;
align-items:center;
border-radius:5px;
padding: 18px 16px;

`;

export const Title = Styled.Text`
font-family:${({ theme }) => theme.fonts.regular}
font-size:${RFValue(14)}px;
`;

export const Icon = Styled(Feather)`
font-size:${RFValue(20)}px;
color:${({ theme }) => theme.colors.text};

`;