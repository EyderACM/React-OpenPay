import React from "react"
import { removeStoredAuthToken } from "shared/utils/authToken"

import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const openPaymentModal = () => {
    alert(process.env.REACT_APP_MERCHANT_ID)
    removeStoredAuthToken()
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
    </PageWrapper>
  )
}

export default ChargeHub
