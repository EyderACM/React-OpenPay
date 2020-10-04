import React, { Fragment, useEffect } from "react"
import OpenPayM from "shared/modules/OpenPay"

const OpenpaySetup = () => {
  useEffect(() => {
    OpenPayM.setId(process.env.REACT_APP_MERCHANT_ID)
    OpenPayM.setApiKey(process.env.REACT_APP_PUBLIC_KEY)
    OpenPayM.setSandboxMode(true)
  }, [])

  return <Fragment />
}

export default OpenpaySetup
