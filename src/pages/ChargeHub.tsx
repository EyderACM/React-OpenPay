import React from "react"
import { getStoredAuthToken, removeStoredAuthToken } from "utils/authToken"

import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const openPaymentModal = () => {
    alert(getStoredAuthToken())
    removeStoredAuthToken()
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
    </PageWrapper>
  )
}

export default ChargeHub
