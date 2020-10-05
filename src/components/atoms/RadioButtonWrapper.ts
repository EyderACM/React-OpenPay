import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'
import { HTMLProps } from 'react'

export const RadioButtonWrapper = styled.div<any>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${pixelToRem(60)};
  justify-content: flex-start;
  width: 100%;
`