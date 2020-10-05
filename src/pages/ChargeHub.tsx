import React, { useState } from "react"
import EPaymentTypes from "interfaces/EPaymentTypes"

import { TransactionModal } from "components/molecules/TransactionModal"
import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [paymentType, setPaymentType] = useState(EPaymentTypes.CREDIT_CARD)
  const [formData, setformData] = useState({
    cardHolder: "",
    expirationMonth: 0,
    expirationYear: 0,
    phoneNumber: "",
    cardNumber: 0,
    cvc: 0,
  })

  const handleFormInputChange = (event: any) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const determinePaymentType = (value: string) =>
    value === EPaymentTypes.OXXO
      ? EPaymentTypes.OXXO
      : EPaymentTypes.CREDIT_CARD

  const handleFormPaymentTypeChange = (event: any) => {
    setPaymentType(determinePaymentType(event.target.value))
  }

  const openPaymentModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
      <TransactionModal
        visible={modalOpen}
        checked={paymentType}
        handleInputChange={handleFormInputChange}
        handlePaymentTypeChange={handleFormPaymentTypeChange}
      />
    </PageWrapper>
  )
}

export default ChargeHub
