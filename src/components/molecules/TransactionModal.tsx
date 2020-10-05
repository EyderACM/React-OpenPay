import React from "react"

import { TransactionModalWrapper } from "../atoms/TransactionModalWrapper"

interface ITransactionModal {
  visible: boolean
}

export const TransactionModal = ({ visible }: ITransactionModal) => {
  return <TransactionModalWrapper display={visible}></TransactionModalWrapper>
}
