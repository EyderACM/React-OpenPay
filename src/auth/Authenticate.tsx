import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import OpenPayM from "shared/modules/OpenPay"

import { getStoredAuthToken, storeAuthToken } from "shared/utils/authToken"
import { PageLoader } from "components/molecules/PageLoader"

const Authenticate = () => {
  const history = useHistory()

  useEffect(() => {
    const createSession = async () => {
      try {
        const authToken = OpenPayM.deviceData.setup("form-charge")
        storeAuthToken(authToken)
        history.push("/charge")
      } catch (error) {
        console.log(OpenPayM)
        alert("there was an error")
      }
    }

    if (!getStoredAuthToken()) {
      createSession()
    }
  }, [history])

  return <PageLoader />
}

export default Authenticate
