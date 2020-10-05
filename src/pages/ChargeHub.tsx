import React, { useState } from "react"
import EPaymentTypes from "interfaces/EPaymentTypes"
import IChargeForm from "interfaces/IChargeForm"
import toast from "shared/utils/toast"
import { chargeFormValidator } from "shared/utils/formValidator"
import { auctionDetails } from "shared/utils/paymentDetails"
import {
  getStoredAuthToken,
  removeStoredAuthToken,
} from "shared/utils/authToken"

import { TransactionModal } from "components/molecules/TransactionModal"
import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"

const ChargeHub = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [transactionData] = useState(auctionDetails({}))
  const [paymentType, setPaymentType] = useState(EPaymentTypes.CREDIT_CARD)
  const [formData, setformData] = useState<IChargeForm>({
    card_holder: "",
    expiration_month: 0,
    expiration_year: 0,
    phone_number: "",
    card_number: 0,
    cvv2: 0,
  })

  const determinePaymentType = (value: string) =>
    value === EPaymentTypes.OXXO
      ? EPaymentTypes.OXXO
      : EPaymentTypes.CREDIT_CARD

  const handleFormInputChange = (event: any) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = (event: any) => {
    const errors = chargeFormValidator(formData)
    if (errors.length > 0) {
      errors.forEach((message) => {
        toast.error(message)
      })
      return
    }
    toast.success("payed")
  }

  const handleFormPaymentTypeChange = (event: any) => {
    setPaymentType(determinePaymentType(event.target.value))
  }

  const openPaymentModal = () => {
    if (!getStoredAuthToken()) {
      toast.error("No estás auténticado")
      return
    }
    setModalOpen(!modalOpen)
    removeStoredAuthToken()
  }

  return (
    <PageWrapper fullScreen justify>
      <ActionButton onClick={openPaymentModal}>Comprar</ActionButton>
      <TransactionModal
        visible={modalOpen}
        checked={paymentType}
        detailCollection={transactionData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleFormInputChange}
        handlePaymentTypeChange={handleFormPaymentTypeChange}
      />
    </PageWrapper>
  )
}

export default ChargeHub
