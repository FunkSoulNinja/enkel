import 'styled-components/native'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      borderRadius: string
      // margin: string
      // padding: string
      borderWidth: string
      // height: string
      unit: number
    }

    colors: {
      primary: string
      primaryDark: string
      secondaryDark: string
    }
  }
}
