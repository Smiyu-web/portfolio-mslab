import { Global, css } from "@emotion/react";

// prettier-ignore
export const GlobalStyles = () => {
  // Todo: propsで渡されるthemeを使うとStorybookでエラーが出るため、一時的にdefaultThemeをあててエラーを回避している。Storybookを6.5以上にアップデートすると直るらしいので、ファーストリリース後に対応する
  // const theme = useTheme()

  return (
  <Global
    styles={css`
      body {
        font-family:
          'Helvetica Neue',
          Arial,
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          Meiryo,
          sans-serif;
      }
`
    }
  />
  )
}
