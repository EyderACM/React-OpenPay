import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${pixelToRem(10)};
  padding-right: ${pixelToRem(30)};
  width: ${pixelToRem(550)};
`