import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${pixelToRem(12)} ${pixelToRem(5)};
`