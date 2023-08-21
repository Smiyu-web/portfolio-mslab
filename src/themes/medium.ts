const mqStatement = (min: number) => `@media (min-width: ${min}px)`;

export const breakPoints = {
  tablet: 960,
  laptopS: 1280,
  mobile: 520,
};

export const media = {
  tablet: mqStatement(breakPoints.tablet),
  laptopS: mqStatement(breakPoints.laptopS),
  mobile: mqStatement(breakPoints.mobile),
};
