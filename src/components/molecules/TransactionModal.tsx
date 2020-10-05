import React from "react"

import { TransactionModalWrapper } from "../atoms/TransactionModalWrapper"
import { TransactionModalContainer } from "../atoms/TransactionModalContainer"

interface ITransactionModal {
  visible: boolean
}

export const TransactionModal = ({ visible }: ITransactionModal) => {
  return (
    <TransactionModalWrapper display={visible}>
      <TransactionModalContainer>probando</TransactionModalContainer>
    </TransactionModalWrapper>
  )
}
