import React, { useState } from "react"
import { removeStoredAuthToken } from "shared/utils/authToken"

import { TransactionModal } from "components/molecules/TransactionModal"
import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openPaymentModal = () => {
    setModalOpen(!modalOpen)
    removeStoredAuthToken()
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
      <TransactionModal visible={modalOpen} />
    </PageWrapper>
  )
}

export default ChargeHub
