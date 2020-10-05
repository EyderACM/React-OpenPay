import React, { useState } from "react"
import PaymentService from "services/PaymentService"
import TokenService from "services/TokenService"

import EPaymentTypes from "interfaces/EPaymentTypes"
import toast from "shared/utils/toast"
import { chargeFormValidator } from "shared/utils/formValidator"
import {
  tokenGeneratedHandler,
  tokenFailedHandler,
  succesfulPayment,
  failedPayment,
} from "shared/utils/errorHandler"
import {
  auctionDetails,
  defaultPaymentDetails,
} from "shared/utils/paymentDetails"
import {
  getStoredAuthToken,
  removeStoredAuthToken,
} from "shared/utils/authToken"

import { TransactionModal } from "components/molecules/TransactionModal"
import { PageWrapper } from "components/atoms/PageWrapper"
import { ActionButton } from "components/atoms/ActionButton"
import ICard from "interfaces/ICard"

const ChargeHub = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [transactionData] = useState(auctionDetails({}))
  const [paymentType, setPaymentType] = useState(EPaymentTypes.CREDIT_CARD)
  const [formData, setformData] = useState<ICard>({
    holder_name: "",
    expiration_month: 0,
    expiration_year: 0,
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
    toast.success("Datos correctos")
    TokenService.generateNewToken(
      formData,
      (res: any) => {
        handleTokenCreation(res)
      },
      tokenFailedHandler
    )
  }

  const handleTokenCreation = (res: any) => {
    tokenGeneratedHandler()
    const chargeData = {
      source_id: res.data.id,
      ...defaultPaymentDetails(
        formData.holder_name.split(" ")[0],
        formData.holder_name.split(" ")[2]
      ),
    }
    removeStoredAuthToken()
    PaymentService.makePayment(
      chargeData,
      () =>
        succesfulPayment(() => {
          setModalOpen(false)
        }),
      failedPayment
    )
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
