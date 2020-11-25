import React, { Fragment, useEffect } from 'react'

import GlobalStyles from './GlobalStyles'
import OpenpaySetup from './OpenpaySetup'
import Toast from './Toast'
import { useHistory } from 'react-router-dom'

import Routes from './Routes'
import OpenPayM from 'shared/modules/OpenPay'
import toast from 'shared/utils/toast'

import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken'

export const App = () => {
  const history = useHistory()

  useEffect(() => {
    const createSession = async () => {
      try {
        const authToken = OpenPayM.deviceData.setup('form-charge')
        storeAuthToken(authToken)
        toast.success('Autenticado correctamente')
      } catch (error) {
        toast.error('Fallo en la autenticación')
        alert('there was an error')
      }
    }

    if (!getStoredAuthToken()) {
      createSession()
    }
  }, [history])

  return (
    <Fragment>
      <GlobalStyles />
      <OpenpaySetup />
      <Toast />
      <Routes />
    </Fragment>
  )
}
