import styled from 'styled-components'
import { GRAY_GUAPO } from 'shared/constants/colors'
import { pixelToRem } from 'shared/utils/pixelToRem'

interface ITransactionModalWrapper {
  displayModal: boolean
}

export const TransactionModalWrapper = styled.div<ITransactionModalWrapper>`
  align-self: center;
  background: ${GRAY_GUAPO};
  border-radius: ${pixelToRem(15)};
  height: ${pixelToRem(550)};
  opacity: ${({displayModal}) => !displayModal ? '0' : '1'};
  position: absolute;
  transition: .4s all;
  visibility: ${({displayModal}) => !displayModal ? 'hidden' : 'visible'};
  width: ${pixelToRem(1000)};
`