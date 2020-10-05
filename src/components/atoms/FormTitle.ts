import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'
import { BLACK } from 'shared/constants/colors'

export const FormTitle = styled.p`
  color: ${ BLACK };
  font-size: ${pixelToRem(20)};
  font-weight: 600;
  margin-top: ${pixelToRem(15)};
  margin-bottom: ${pixelToRem(5)};
  padding: 0;
`