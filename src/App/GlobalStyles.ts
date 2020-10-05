import { createGlobalStyle } from 'styled-components'
import { BACKGROUND } from 'shared/constants/colors'

export default createGlobalStyle`
  body {
  background: ${BACKGROUND};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`