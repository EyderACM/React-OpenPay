import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

export const RadioButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${pixelToRem(60)};
  justify-content: flex-start;
  width: 100%;
`