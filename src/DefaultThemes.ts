import { extendTheme } from '@chakra-ui/react';

interface Props {
  colorMode: 'light' | 'dark';
}

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  pink: '#FED3D4',
  lightBrownText: '#54383E',
  darkBrownText: '#322528',
  CartBackgroundYellow: '#FFF9F4',
  yellowGradient: '#FFF2DD',
  lightYellow: '#FFF2E5',
  darkPinkButton: '#AF6969',
  lightGreenButton: '#ACCDB5',
  cardBackground: '#FFF2E5',
  matchaCard: '#98D16B',
  darkGreenButton: '#3A8669',
  bigMatchaCard: '#A2AA70',
  yellowCardCircle: '#FEE5BE',
  strawberryTeaCircle: '#FC6868',
  pinkCardButton: '#F79DA3',
  milkTeaCircle: '#E4BC80',
  yellowButton: '#FEE5BE',
  darkYellowButton: '#E4BC80',
  chocolateBrown: '#96584F',
  darkChocolateBubbles: '#412D2D',
  beige: '#C9A69B',
  footerBottom: '#412D2D',
};


const borderRadius = {
  border1: '1rem',
};

const theme = extendTheme({
  colors,
  borderRadius,
});

export default theme;
