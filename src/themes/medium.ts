const mqStatement = (min: number) => `@media (min-width: ${min}px)`;

export const breakPoints = {
  tabletS: 768,
  tablet: 960,
  laptopS: 1280,
  mobile: 520,
};

export const media = {
  tabletS: mqStatement(breakPoints.tabletS),
  tablet: mqStatement(breakPoints.tablet),
  laptopS: mqStatement(breakPoints.laptopS),
  mobile: mqStatement(breakPoints.mobile),
};
