import styled from 'styled-components'
import { GRAY_TEXT } from 'shared/constants/colors'
import { pixelToRem } from 'shared/utils/pixelToRem'

export const DetailDescription = styled.p`
  color: ${GRAY_TEXT};
  margin: 0;
  padding-left: ${pixelToRem(15)};
`