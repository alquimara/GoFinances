import { RFValue } from "react-native-responsive-fontsize";
import Styled from "styled-components/native";

export const Container = Styled.View`
width: 100%;
`;
export const Error = Styled.Text`
color:${({ theme }) => theme.colors.attention}
font-size:${RFValue(14)}px;
font-family:${({ theme }) => theme.fonts.regular}
margin: 7px 0;

`;