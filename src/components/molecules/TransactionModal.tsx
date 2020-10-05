import React from "react"
import oxxoLogo from "img/oxxo-logo.svg"

import { TransactionModalWrapper } from "../atoms/TransactionModalWrapper"
import { TransactionModalContainer } from "../atoms/TransactionModalContainer"
import { ResizableImg } from "../atoms/ResizableImg"
import { PaymentTypeContainer } from "../atoms/PaymentTypeContainer"
import { RadioButtonWrapper } from "../atoms/RadioButtonWrapper"
import { FormTitle } from "../atoms/FormTitle"
import { FormWrapper } from "../atoms/FormWrapper"

interface ITransactionModal {
  visible: boolean
  handleInputChange: Function
}

export const TransactionModal = ({
  visible,
  handleInputChange,
}: ITransactionModal) => {
  return (
    <TransactionModalWrapper display={visible}>
      <TransactionModalContainer>
        <FormWrapper>
          <PaymentTypeContainer>
            <FormTitle>Método de pago</FormTitle>
            <RadioButtonWrapper>
              <input type="radio" value="oxxo" name="payment" />
              <ResizableImg src={oxxoLogo} alt="oxxo logo" width={40} />
            </RadioButtonWrapper>
            <RadioButtonWrapper>
              <input type="radio" value="creditCard" name="payment" />
              <p>Credit or debit card</p>
            </RadioButtonWrapper>
          </PaymentTypeContainer>
        </FormWrapper>
        <div>dssds</div>
      </TransactionModalContainer>
    </TransactionModalWrapper>
  )
}
