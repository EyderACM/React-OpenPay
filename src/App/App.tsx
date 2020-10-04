import React, { Fragment } from "react"
import { openpayurl } from "shared/constants/openpay"
import useScript from "shared/hooks/useScript"

import GlobalStyles from "./GlobalStyles"
import Routes from "./Routes"

export const App = () => {
  useScript(openpayurl)

  return (
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  )
}
