import React from "react"
import oxxoLogo from "img/oxxo-logo.svg"
import creditCards from "img/cards.png"
import EPaymentTypes from "interfaces/EPaymentTypes"

import { TransactionModalContainer } from "../atoms/TransactionModalContainer"
import { TransactionModalWrapper } from "../atoms/TransactionModalWrapper"
import { PaymentTypeContainer } from "../atoms/PaymentTypeContainer"
import { RadioButtonWrapper } from "../atoms/RadioButtonWrapper"
import { FormInput } from "../atoms/FormInput"
import { ResizableImg } from "../atoms/ResizableImg"
import { FormWrapper } from "../atoms/FormWrapper"
import { FormTitle } from "../atoms/FormTitle"
import { Row } from "../tools/Row"

interface ITransactionModal {
  visible: boolean
  handleInputChange: Function
  checked: EPaymentTypes
  handlePaymentTypeChange: Function
}

export const TransactionModal = ({
  visible,
  checked,
  handleInputChange,
  handlePaymentTypeChange,
}: ITransactionModal) => {
  return (
    <TransactionModalWrapper display={visible}>
      <TransactionModalContainer>
        <FormWrapper>
          <PaymentTypeContainer>
            <FormTitle>Método de pago</FormTitle>
            <RadioButtonWrapper>
              <FormInput
                onChange={handlePaymentTypeChange}
                checked={checked === EPaymentTypes.OXXO}
                type="radio"
                value="oxxo"
                name="payment"
              />
              <ResizableImg src={oxxoLogo} alt="oxxo logo" width={40} />
            </RadioButtonWrapper>
            <RadioButtonWrapper>
              <FormInput
                onChange={handlePaymentTypeChange}
                checked={checked === EPaymentTypes.CREDIT_CARD}
                type="radio"
                value="creditCard"
                name="payment"
              />
              <Row>
                <p>Credit or debit card</p>
                <ResizableImg
                  src={creditCards}
                  alt="credit card logos"
                  height={20}
                />
              </Row>
            </RadioButtonWrapper>
          </PaymentTypeContainer>
        </FormWrapper>
        <div>dssds</div>
      </TransactionModalContainer>
    </TransactionModalWrapper>
  )
}
