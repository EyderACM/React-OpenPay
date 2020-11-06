import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'
import { BLACK } from 'shared/constants/colors'


export const DetailText = styled.h4`
  color: ${BLACK};
  font-size: ${pixelToRem(15)};
  margin: ${pixelToRem(5)} ${pixelToRem(0)};
`