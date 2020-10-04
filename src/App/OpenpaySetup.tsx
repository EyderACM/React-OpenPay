import React, { Fragment, useEffect } from "react"

const OpenpaySetup = () => {
  useEffect(() => {
    /*global OpenPay */
    //@ts-ignore
    OpenPay.setId(process.env.REACT_APP_MERCHANT_ID)
    //@ts-ignore
    OpenPay.setApiKey(process.env.REACT_APP_PUBLIC_KEY)
    //@ts-ignore
    OpenPay.setSandboxMode(true)
  }, [])

  return <Fragment />
}

export default OpenpaySetup
