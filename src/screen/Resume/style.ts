import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'



export const Container = Styled.View`
flex: 1;
background-color:${({ theme }) => theme.colors.background};


`;
export const Header = Styled.View`
background-color:${({ theme }) => theme.colors.primary}
width: 100%;
height: ${RFValue(113)}px;
align-items: center;
justify-content: flex-end;
padding-bottom:19px;
`;

export const Title = Styled.Text`
font-family:${({ theme }) => theme.fonts.regular};
color: ${({ theme }) => theme.colors.shape};
font-size:${RFValue(18)}px;
`;
export const Content = Styled.ScrollView.attrs({
    showsHorizontalScrollIndicator:false,
   
    contentContainerStyle:{ paddingBottom: 24,paddingHorizontal:24}
})`
`;

export const ChartContainer = Styled.View`

width: 100%;
align-items:center;
`;
export const MonthSelect = Styled.View`
width: 100%;
flex-direction: row;
align-items:center;
justify-content:space-between;
margin-top: 24px;

`;
export const MonthSelectButton = Styled.TouchableOpacity`

`;

export const SelectIcon = Styled(Feather)`
font-size:${RFValue(35)}px;
`;

export const Month = Styled.Text`
font-family:${({theme})=> theme.fonts.regular}
font-size:${RFValue(20)}px;


`
