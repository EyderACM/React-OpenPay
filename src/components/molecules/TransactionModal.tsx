import React from "react"
import oxxoLogo from "img/oxxo-logo.svg"
import creditCards from "img/cards.png"
import EPaymentTypes from "interfaces/EPaymentTypes"

import { TransactionModalContainer } from "../atoms/TransactionModalContainer"
import { TransactionModalWrapper } from "../atoms/TransactionModalWrapper"
import { PaymentTypeContainer } from "../atoms/PaymentTypeContainer"
import { RadioButtonWrapper } from "../atoms/RadioButtonWrapper"
import { DetailDescription } from "../atoms/DetailDescription"
import { DetailWrapper } from "../atoms/DetailWrapper"
import { DetailSection } from "../atoms/DetailSection"
import { PaymentButton } from "../atoms/PaymentButton"
import { ResizableImg } from "../atoms/ResizableImg"
import { FormWrapper } from "../atoms/FormWrapper"
import { ShortInput } from "../atoms/ShortInput"
import { DetailText } from "../atoms/DetailText"
import { FormTitle } from "../atoms/FormTitle"
import { FormInput } from "../atoms/FormInput"
import { Column } from "../tools/Column"
import { Row } from "../tools/Row"

interface ITransactionModal {
  visible: boolean
  checked: EPaymentTypes
  detailCollection: any
  handleFormSubmit: any
  handleInputChange: Function
  handlePaymentTypeChange: Function
}

export const TransactionModal = ({
  visible,
  checked,
  handleInputChange,
  handleFormSubmit,
  detailCollection,
  handlePaymentTypeChange,
}: ITransactionModal) => {
  return (
    <TransactionModalWrapper displayModal={visible}>
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
                <p>Tarjeta de Crédito o Débito</p>
                <ResizableImg
                  src={creditCards}
                  alt="credit card logos"
                  height={20}
                />
              </Row>
            </RadioButtonWrapper>
          </PaymentTypeContainer>
          <form onSubmit={handleFormSubmit}>
            <Column>
              <p>Nombre del titular</p>
              <input
                type="text"
                placeholder="Tu nombre"
                name="holder_name"
                onChange={(e) => handleInputChange(e)}
              />
            </Column>
            <Column>
              <p>Número de tarjeta</p>
              <input
                pattern="[0-9]+"
                maxLength={19}
                type="text"
                placeholder="0000 0000 0000 0000"
                name="card_number"
                onChange={(e) => handleInputChange(e)}
              />
            </Column>
            <Column>
              <Row>
                <Column>
                  <p>Fecha de expiración</p>
                  <Row>
                    <ShortInput
                      maxLength={2}
                      type="text"
                      placeholder="00"
                      name="expiration_month"
                      width={40}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <ShortInput
                      maxLength={4}
                      type="text"
                      placeholder="00"
                      name="expiration_year"
                      width={40}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Row>
                </Column>
                <Column>
                  <p>CVC/CVV</p>
                  <input
                    maxLength={3}
                    type="text"
                    placeholder="000"
                    name="cvv2"
                    onChange={(e) => handleInputChange(e)}
                  />
                </Column>
              </Row>
            </Column>
          </form>
        </FormWrapper>
        <DetailWrapper>
          {detailCollection.map(({ detailName, detailValue }: any) => {
            return (
              <DetailSection key={detailName}>
                <DetailText>{detailName}</DetailText>
                <DetailDescription>{detailValue}</DetailDescription>
              </DetailSection>
            )
          })}
          <PaymentButton onClick={handleFormSubmit}>Pagar</PaymentButton>
        </DetailWrapper>
      </TransactionModalContainer>
    </TransactionModalWrapper>
  )
}
