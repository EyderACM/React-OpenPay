import styled from 'styled-components'
import { WHITE } from 'shared/constants/colors'
import { pixelToRem } from 'shared/utils/pixelToRem'

interface ITransactionModalWrapper {
  display: boolean
}

export const TransactionModalWrapper = styled.div<ITransactionModalWrapper>`
  align-self: center;
  background: ${WHITE};
  border-radius: ${pixelToRem(15)};
  height: ${pixelToRem(550)};
  opacity: ${({display}) => !display ? '0' : '1'};
  position: absolute;
  transition: .3s all;
  visibility: ${({display}) => !display ? 'hidden' : 'visible'};
  width: ${pixelToRem(1000)};
`