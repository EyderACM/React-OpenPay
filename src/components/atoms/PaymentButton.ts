import styled from 'styled-components'

import { pixelToRem } from 'shared/utils/pixelToRem'
import { BLUE_FANCY, WHITE } from 'shared/constants/colors'

export const PaymentButton = styled.button`
  align-self: center;
  background: ${ BLUE_FANCY };
  border: none;
  border-radius: ${pixelToRem(10)};
  color: ${ WHITE };
  cursor: pointer;
  font-size: ${pixelToRem(17)};
  font-weight: 600;
  height: ${pixelToRem(40)};
  justify-self: center;
  margin-top: ${pixelToRem(10)};
  transition: .2s ease-out;
  width: 100%;

  &:hover {
    scale: 1.005;
  } 
`