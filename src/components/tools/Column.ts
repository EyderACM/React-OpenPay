import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${pixelToRem(35)} ${pixelToRem(5)};
`