import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import OpenPayM from "shared/modules/OpenPay"
import toast from "shared/utils/toast"

import { getStoredAuthToken, storeAuthToken } from "shared/utils/authToken"
import { PageLoader } from "components/molecules/PageLoader"

const Authenticate = () => {
  const history = useHistory()

  useEffect(() => {
    const createSession = async () => {
      try {
        const authToken = OpenPayM.deviceData.setup("form-charge")
        storeAuthToken(authToken)
        toast.success("Autenticado correctamente")    
      } catch (error) {
        toast.error("Fallo en la autenticación")
        alert("there was an error")
      }
    }

    if (!getStoredAuthToken()) {
      createSession()
    }
    history.push("/charge")
  }, [history])

  return <PageLoader />
}

export default Authenticate
