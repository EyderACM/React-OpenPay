import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

export const TransactionModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${pixelToRem(20)};
`