import { extendTheme } from '@chakra-ui/react';

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

const darkColors = {
  transparent: 'transparent',
  black: '#fff',
  white: '#000',
  pink: '#ff8d8e',
  lightBrownText: '#b4a9a9',
  darkBrownText: '#b4a9a9',
  CartBackgroundYellow: '#1c1b1b',
  yellowGradient: '#242424',
  lightYellow: '#2c2b2b',
  darkPinkButton: '#FFADAD',
  lightGreenButton: '#6FCF97',
  cardBackground: '#2c2b2b',
  matchaCard: '#6DDA6B',
  darkGreenButton: '#6DDA6B',
  bigMatchaCard: '#6DDA6B',
  yellowCardCircle: '#FEE5BE',
  strawberryTeaCircle: '#FC6868',
  pinkCardButton: '#FFADAD',
  milkTeaCircle: '#E4BC80',
  yellowButton: '#FEE5BE',
  darkYellowButton: '#E4BC80',
  chocolateBrown: '#D98F7E',
  darkChocolateBubbles: '#9A7771',
  beige: '#C9A69B',
  footerBottom: '#9A7771',
};

const borderRadius = {
  border1: '1rem',
};

const theme = extendTheme({
  colors,
  darkMode: {
    colors: darkColors,
  },
  borderRadius,
});

export default theme;