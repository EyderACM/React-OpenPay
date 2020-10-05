import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'
import { BLACK } from 'shared/constants/colors'

export const FormInput = styled.input<any>`
  border: ${BLACK} solid ${pixelToRem(3)};
  margin-right: ${pixelToRem(15)};
`