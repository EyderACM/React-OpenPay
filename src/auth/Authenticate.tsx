import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

import { getStoredAuthToken, storeAuthToken } from "utils/authToken"
import { PageLoader } from "components/molecules/PageLoader"

const Authenticate = () => {
  const history = useHistory()

  useEffect(() => {
    const createSession = async () => {
      try {
        const authToken = "123"
        storeAuthToken(authToken)
        history.push("/charge")
      } catch (error) {
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
