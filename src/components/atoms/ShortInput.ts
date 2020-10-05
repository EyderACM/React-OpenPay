import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

interface IShortInput {
  width?: number;
}

export const ShortInput = styled.input<IShortInput>`
  ${({width}) => width && `width: ${pixelToRem(width)}`}
`