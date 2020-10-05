import React from "react"

import { TransactionModalWrapper } from "../atoms/TransactionModalWrapper"
import { TransactionModalContainer } from "../atoms/TransactionModalContainer"
import { FormWrapper } from "../atoms/FormWrapper"

interface ITransactionModal {
  visible: boolean
}

export const TransactionModal = ({ visible }: ITransactionModal) => {
  return (
    <TransactionModalWrapper display={visible}>
      <TransactionModalContainer>
        <FormWrapper></FormWrapper>
        <div>dssds</div>
      </TransactionModalContainer>
    </TransactionModalWrapper>
  )
}
