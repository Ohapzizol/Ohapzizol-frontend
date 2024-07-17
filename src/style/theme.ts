export const theme = {
  primary1: '#002990',
  primary2: '#3D8FDB',
  primary3: '#62AAFF',
  primary4: '#96D9FF',
  primary5: '#E9F1FF',
  error1: '#FF1414',
  error2: '#FF576B',
  error3: '#FFACAC',
  error4: '#FFD1D1',
  green1: '#4EFF56',
  green2: '#9EFF85',
  green3: '#B2FFA5',
  green4: '#CDFDCF',
  gray1: '#000000',
  gray2: '#6B6B6B',
  gray3: '#9E9E9E',
  gray4: '#C4C4C4',
  gray5: '#E6E6E6',
  gray6: '#F4F4F4',
} as const;

export type themeKeyOfType = keyof typeof theme;
