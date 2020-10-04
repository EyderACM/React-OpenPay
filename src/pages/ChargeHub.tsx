import React from "react"

import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const openPaymentModal = () => {
    alert("Clickeado")
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
    </PageWrapper>
  )
}

export default ChargeHub
