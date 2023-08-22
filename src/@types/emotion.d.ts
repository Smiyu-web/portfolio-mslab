import '@emotion/react'
import { IdealTheme } from 'themes'

declare module '@emotion/react' {
  export interface Theme extends IdealTheme {}
}
