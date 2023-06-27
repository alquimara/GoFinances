
import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native'



export const Container = Styled(TouchableOpacity)`
width: 100%;
background-color:${({ theme }) => theme.colors.secondary}
padding: 18px;
border-radius:5px;
align-items: center;

`;

export const Title = Styled.Text`
font-family:${({ theme }) => theme.fonts.medium}
font-size:${RFValue(14)}px;
color:${({ theme }) => theme.colors.shape}

`;