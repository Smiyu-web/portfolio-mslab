import { Theme } from "@emotion/react";

import { colors } from "./color";
import { fonts } from "./font";
import { zIndexes } from "./zIndex";
import { media } from "./medium";

export type IdealTheme = typeof defaultTheme;
export type CSSFunctionMixinProps = {
  children?: React.ReactNode;
  theme: Theme;
};

/*
  EmotionのThemeing機能で利用
  将来的にテーマを切り替える時などに有効
 */
export const defaultTheme = {
  colors: colors,
  fonts: fonts,
  zIndexes: zIndexes,
  media: media,
};
