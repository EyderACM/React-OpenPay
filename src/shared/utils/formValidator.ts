import IChargeForm from "interfaces/IChargeForm"
import OpenPayM from 'shared/modules/OpenPay'

export const chargeFormValidator = ({
  expiration_month,
  expiration_year,
  card_number,
  cvv2,
}: IChargeForm) => {
  const errors = [];
  if(!OpenPayM.card.validateCardNumber(card_number)) errors.push('Número de tarjeta inválido')
  if(!OpenPayM.card.validateCVC(cvv2)) errors.push('CVC inválido')
  if(!OpenPayM.card.validateExpiry(expiration_month, expiration_year)) errors.push('Fecha de vencimiento inválida')
  return errors
}