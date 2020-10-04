import React from "react"
import TokenService from "services/TokenService"
import ICard from "interfaces/ICard"
import { removeStoredAuthToken } from "shared/utils/authToken"

import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const alertSuccess = () => {
    alert("success")
  }

  const alertError = () => {
    alert("error")
  }

  const openPaymentModal = () => {
    const card = {} as ICard
    TokenService.generateNewToken(card, alertSuccess, alertError)
    removeStoredAuthToken()
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
    </PageWrapper>
  )
}

export default ChargeHub
