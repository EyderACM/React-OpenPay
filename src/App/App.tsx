import React, { Fragment } from "react"

import GlobalStyles from "./GlobalStyles"
import OpenpaySetup from "./OpenpaySetup"
import Toast from "./Toast"
import Routes from "./Routes"

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <OpenpaySetup />
      <Toast />
      <Routes />
    </Fragment>
  )
}
